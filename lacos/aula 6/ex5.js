const prompt = require("prompt-sync")()
let soma = 0
do{
    let numero = parseInt(prompt("digite um número: ")) //parsefloot numero decmimal
    soma = soma + numero
    console.log("número: ", numero, "Total", soma);
}while (soma <1000)

    console.log("Encerrou em", soma);