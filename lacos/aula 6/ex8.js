const prompt = require('prompt-sync')()

let dolar = 5.87
let euro = 5.46
let peso = 0.0058
let libra = 6.35
let valor = 100

let convDolar = valor / dolar
let convEuro = valor / euro
let convPeso = valor / peso
let convLibra = valor / libra

console.log(valor, "em Reais dá", convDolar, "Dólares");
console.log(valor, "em Reais dá", convEuro, "Euros");
console.log(valor, "em Reais dá", convPeso, "Pesos");
console.log(valor, "em Reais dá", convLibra, "Libras");
