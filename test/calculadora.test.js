// Chamando/Importando a função que quero testar
const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');
describe('Teste da função somarDoisNumeros', function () {
    it ('A função deve ser capaz de somar dois números positivos', function () {    
        const resultado = somarDoisNumeros(5, 10); // Coleta o resultado da função        
        expect(resultado).to.equal(15); // Comparo o resultado da função com o resultado esperado
    });

    it ('A função deve ser capaz de somar um número positivo e negativo', function () {    
        const resultado = somarDoisNumeros(-5, 10); // Coleta o resultado da função        
        expect(resultado).to.equal(5); // Comparo o resultado da função com o resultado esperado
    });

});