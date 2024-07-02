const prompt = require('prompt-sync')()

let operacao
let valor1 
let valor2 
do {
    operacao = prompt("Escolha uma operação matemática: ")

    switch (operacao) {
        case '+':
            valores()
            console.log(valor1, " + ", valor2, ' = ', adicao(valor1, valor2));
            break
        case '-':
            valores()
            console.log(valor1, " - ", valor2, ' = ', subtracao(valor1, valor2));
            break
        case '*':
            valores()
            console.log(valor1, " * ", valor2, ' = ', multiplicacao(valor1, valor2));
            break
        case '/':
            valores()
            console.log(valor1, " / ", valor2, ' = ', divisao(valor1, valor2));
            break
        default:
            console.log("operação inválida");
            break
    }
} while (operacao != 'sair')
console.log("Calculadora encerrada");

//funções de operação
function valores() {
    valor1 = parseFloat(prompt("Digite o primeiro valor:"))
    valor2 = parseFloat(prompt("Digite o segundo valor:"))
}

function adicao(v1, v2) {
    return v1 + v2
}
function subtracao(v1, v2) {
    return v1 - v2
}
function multiplicacao(v1, v2) {
    return v1 * v2
}
function divisao(v1, v2) {
    return v1 / v2
}