// codigo.test.js
const { soma, dobro } = require('./codigo'); // Importando as funções soma e dobro

describe('Funções matemáticas', () => {
    
    let valor1, valor2;

    
    beforeEach(() => {
        valor1 = 2;
        valor2 = 5;
        console.log('Antes de cada teste');
    });

   
    afterEach(() => {
        console.log('Após cada teste');
    });

    
    afterAll(() => {
        console.log('Após todos os testes');
    });

    
    it('deve somar dois valores corretamente', () => {
        expect(soma(valor1, valor2)).toBe(7); 
        expect(soma(2, 4)).toBe(6);           
        expect(soma(21, 44)).toBe(65);       
    });

    it('dobro de um valor', () => {
        expect(dobro(4)).toBe(8); 
    });

});

