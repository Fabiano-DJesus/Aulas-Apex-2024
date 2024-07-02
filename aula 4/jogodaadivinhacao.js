//adivinhar numero entre 1 e 10 que o sistema escolheu, enquanto vc n~~ao acertar o sistema ficará pedindo número

const prompt = require("prompt-sync")()
let numeroSecreto = Math.floor(Math.random() * 10) +1
let tentativa

do {
    tentativa = parseInt( prompt("informe o número entre 1 e 10: "))
} while (tentativa !== numeroSecreto);
console.log("parabéns, você acertou!!!", numeroSecreto);