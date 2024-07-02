const prompt = require("prompt-sync")()

let tabuada = prompt("escolha um número para gerar a tabuada: ") // ou parseInt(prompt....)


if (!isNaN(tabuada)) {

    for (let i = 1; i <= 10; i++) {
        console.log(tabuada, "x", i, " = ", tabuada * i);

    }
}
else {
    console.log(tabuada, "não é um número");
}