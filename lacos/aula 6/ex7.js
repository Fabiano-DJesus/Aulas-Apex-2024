const prompt = require('prompt-sync')()
let saldo = parseInt(prompt("Qual o saldo d cliente?"))
let credito = 0;

if (saldo <= 200){
    credito = 0
} else if(saldo > 200 && saldo <=400){
    credito = saldo *0.20
} else if(saldo > 400 && saldo <=600){
    credito = saldo *0.30
} else{
    credito = saldo *0.40
}    
console.log("Seu cliente tem um saldo de ", saldo, "o credito liberado é de : ", credito);
