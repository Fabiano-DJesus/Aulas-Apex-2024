const prompt = require('prompt-sync')()
let valorBase = 100
let valorAdicional = 0
let idade = ParseInt(Prompt("Qual a idade do cliente? " ))
if(idade = 10){
valorAdicional= 80
}else if(idade >= 10 && idade < 40){
    valorAdicional = 50
}else if(idade >= 40 && idade >60){
    valorAdicional = 95
}else{
    valorAdicional = 130
}

let resultado = valorBase + valorAdicional
console.log("Seu plano custará", resultado);