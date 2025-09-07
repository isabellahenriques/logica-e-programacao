function somarDoisNumeros (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros (valor1, valor2) {
    const resultadoSomaDeDoisValores = valor1 + valor2;
    const resultadoMediaDeDoisValores = resultadoSomaDeDoisValores/2;
    return resultadoMediaDeDoisValores;
}

// Mostra as funções para outros arquivos
module.exports = {
    somarDoisNumeros,
    calcularMediaDeDoisNumeros
}