
# Testes de Unidade com Jest e Node.js

## Introdução

Testes de Unidade são essenciais para garantir que cada parte do seu código funcione corretamente. Eles validam as menores unidades do sistema, como funções ou métodos, e ajudam a evitar que erros se espalhem para os níveis mais altos de teste. Esses testes são normalmente realizados pelo próprio desenvolvedor e desempenham um papel crucial em manter o código limpo, eficiente e com menos bugs.

Ao implementar testes de unidade, você pode:

- Detectar problemas no início do desenvolvimento.
- Garantir que o código funcione conforme o esperado, mesmo após refatorações.
- Aumentar a confiança na qualidade do seu sistema.

---

## Objetivos dos Testes de Unidade

Os testes de unidade têm como objetivo principal validar o comportamento de uma função ou método. Ao escrever esses testes, algumas perguntas chave devem ser respondidas:

- **O que estou testando?**  
  Determina qual função ou método está sendo validado.
  
- **O que o método deveria fazer?**  
  Descreve o comportamento esperado da função ou método.

- **Qual é o retorno atual?**  
  Verifica o que a função retorna no momento do teste.

- **Qual é o retorno esperado?**  
  Compara o retorno atual com o que deveria ser o retorno correto.

---

## Ferramentas Usadas

Para realizar os testes de unidade, utilizamos as seguintes ferramentas essenciais:

- **Jest**: Framework de testes para JavaScript, amplamente utilizado para testar código em Node.js e aplicações front-end. Ele fornece uma interface simples para a criação e execução de testes, além de recursos como mocks, spies e asserts para facilitar a escrita de testes.
  
- **Visual Studio Code (VSCode)**: IDE altamente popular para desenvolvimento, com suporte robusto para JavaScript e Node.js. Com diversos plugins de testes, facilita a integração com o Jest e outros frameworks de testes, proporcionando uma experiência fluida durante o desenvolvimento.

- **Node.js**: Ambiente de execução para JavaScript no servidor, permitindo que você execute código JavaScript fora do navegador. O Node.js é a base para executar o Jest em projetos back-end, além de ser utilizado para criar servidores, APIs e outros tipos de aplicações.

---

## Começando com o Projeto

Agora que você já entende a importância dos testes de unidade e as ferramentas que vamos utilizar, vamos aprender como configurar e iniciar o projeto de testes.

### Passo 1: Inicializando o Projeto

Para começar, precisamos criar um novo projeto Node.js. Se ainda não tiver um `package.json`, crie um com o comando:

```bash
npm init -y
```
![image](https://github.com/user-attachments/assets/e4006e92-0b21-4d86-84a1-e68cea548942)

## Passo 2: Instalando o Jest

Jest é a ferramenta que usei para rodar os testes. Instale-o como uma dependência de desenvolvimento com o seguinte comando:

```bash
npm install --save-dev jest
```
## Passo 3: Criando o Arquivo de Teste

Agora, crie o arquivo de teste. Vamos criar um teste simples que valida uma função de soma.

### Exemplo Prático: Desenvolvimento Orientado a Testes (TDD)

O ciclo **TDD** é composto por três fases: **Red**, **Green** e **Refactor**. Vamos ilustrar isso com um exemplo de soma.

### 1. Red (Vermelho)

No início, escrevemos um teste que falha, pois a função ainda não foi implementada. Vamos criar um teste que espera que a função `soma` retorne a soma correta de dois números.

![image](https://github.com/user-attachments/assets/b8e5569e-3190-4885-8966-d13e9325a027)

### 2. Green (Verde)
Agora, implementamos o código mínimo necessário para fazer o teste passar.


![image](https://github.com/user-attachments/assets/cc9dbb7a-4473-4b2d-9508-126c6a31c423)

## Deois de implementado veja que ele passa.
![image](https://github.com/user-attachments/assets/f417d4ed-4ab6-40c9-9ac6-96e5d45c3212)


### 3. Refactor (Refatoração)
Após o teste passar, podemos refatorar o código para melhorar sua estrutura e legibilidade, mas sempre garantindo que os testes continuam passando.


### Testing Doubles

Este teste mostra como utilizar **mocks** e **stubs** com o **Sinon** para isolar partes do sistema e garantir que o comportamento do controller está correto sem depender de uma base de dados real.

Este teste foi criado para verificar o funcionamento do **Controller de Usuários**, que é responsável por obter a lista de usuários de um banco de dados.

### O que o teste faz?

1. **Cria um mock do banco de dados**: Ao invés de usar um banco de dados real, o teste cria uma versão simulada do banco (um "mock") usando o **Sinon**.
2. **Simula a resposta do banco de dados**: O banco simulado sempre retorna uma lista de usuários pré-definida quando o método `findAll` é chamado.
3. **Verifica a chamada ao banco**: O teste garante que o controller está chamando o banco corretamente (pedindo os usuários com o argumento correto, que é `'usuarios'`).
4. **Verifica a resposta do controller**: O teste também verifica se o controller está retornando a resposta correta para a aplicação (a lista de usuários que esperamos).

### Como funciona o código do teste?

1. **Mock do Banco de Dados**:
   - Criamos um mock para o banco de dados usando `mock(Database)`.
   - Definimos que, quando o método `findAll` for chamado com o argumento `'usuarios'`, o banco irá retornar uma lista de usuários simulada (`respostaEsperada`).

2. **Instanciando o Controller**:
   - Criamos uma instância do **UsuariosController**, passando o banco de dados mockado como parâmetro.

3. **Executando o Teste**:
   - Chamamos o método `getAll()` do controller, que por sua vez chama o `findAll()` no banco de dados mockado.

4. **Verificando o Resultado**:
   - Usamos `expect` para garantir que a resposta do controller seja a mesma que a lista de usuários esperada.
   - Usamos `dbMock.verify()` para garantir que o método `findAll` foi chamado corretamente.

Esse teste é útil em vários cenários, especialmente quando estamos trabalhando com testes de unidade e queremos garantir que uma parte específica do nosso código, como o controller, esteja funcionando corretamente sem depender de outros componentes (como o banco de dados real).

![image](https://github.com/user-attachments/assets/836c6395-af3d-406b-b4ee-0f8d0dcab88b)

## Rodandos os Testes 
![image](https://github.com/user-attachments/assets/c40ee00c-b6d4-46cc-89bb-70b895418a69)


Veja 🍿





https://github.com/user-attachments/assets/21c81cd2-33e2-4811-af6f-cc77dc985143






