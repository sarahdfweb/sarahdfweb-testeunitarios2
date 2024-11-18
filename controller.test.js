const { spy, assert, stub, mock } = require('sinon');
const { Database } = require('./database');
const { UsuariosController } = require('./controller');

describe('Controller de Usuários', () => {
    let fakeDatabase;
    let controller;

    beforeEach(() => {
        // Mock do banco de dados com stub
        fakeDatabase = {
            findAll: stub()  // Stub para controlar a resposta da função findAll
        };
        controller = new UsuariosController(fakeDatabase);
    });

    it('deve retornar todos os usuários corretamente', () => {
        const respostaEsperada = [
            {
                id: 10,
                nome: 'sarah',
                email: 'sarah@teste.com'
            }
        ];

        // Definindo o retorno do stub com o argumento esperado
        fakeDatabase.findAll.withArgs('usuarios').returns(respostaEsperada);

        const response = controller.getAll();

        expect(response).toEqual(respostaEsperada);
        assert.calledWith(fakeDatabase.findAll, 'usuarios'); // Verifica se o método foi chamado com o parâmetro correto
    });

    it('deve chamar a função findAll com o argumento correto', () => {
        const respostaEsperada = [
            {
                id: 10,
                nome: 'sarah',
                email: 'sarah@teste.com'
            }
        ];

        // Definindo o retorno do stub com o argumento esperado
        fakeDatabase.findAll.withArgs('usuarios').returns(respostaEsperada);

        controller.getAll();

        // Verificando se a função foi chamada corretamente
        assert.calledWith(fakeDatabase.findAll, 'usuarios');
    });

    it('deve retornar dados esperados usando mock', () => {
        const respostaEsperada = [
            {
                id: 10,
                nome: 'João Carlos',
                email: 'jcemail@teste.com'
            }
        ];

        // Criando mock do Database e configurando o comportamento de findAll
        const dbMock = mock(Database);
        dbMock.expects('findAll').once().withArgs('usuarios').returns(respostaEsperada);

        const controller = new UsuariosController(Database); // Usando o mock diretamente aqui
        const response = controller.getAll();

        expect(response).toEqual(respostaEsperada);

        dbMock.verify();  // Verifica se o mock foi chamado corretamente
        dbMock.restore(); // Restaura a função original após o teste
    });
});
