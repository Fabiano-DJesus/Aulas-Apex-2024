let i = 0
do {
    console.log("O número é: ", i);
    i++
} while (i < 5);

//jogo da adivinhação
const prompt = require("prompt-sync")()
const numeroSecreto = 7;
let numero
do{
    numero = parseInt(prompt("Digite um número: "))

}while(numero !== numeroSecreto)
    console.log("Parabéns, número encontrado.");