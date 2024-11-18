// codigo.js
const soma = (a, b) => {
    return a + b;  // Retorna a soma de a e b
};  // Fechando corretamente a função soma

const dobro = valor => valor * 2;  // Função dobro fora da função soma

module.exports = { soma, dobro };  // Exporta ambas as funções
