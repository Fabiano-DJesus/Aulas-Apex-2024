const prompt = require('prompt-sync')()
let quant = parseInt(prompt("quantas maçãs deseja? "))

if(quant>= 12){
    console.log(quant, "maçãs custam", quant * 1);
} else{
    console.log(quant, "maçãs custam", quant * 1,30);
}