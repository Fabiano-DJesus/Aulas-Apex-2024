
let soma = 0;


while (soma < 1000) {
    let numero = parseInt(prompt("Digite um número:"));

    
    if (!isNaN(numero)) {
        soma += numero;
    } else {
        alert("Por favor, digite um número válido.");
    }
}

// Exibindo a soma
console.log("A soma dos números atingiu ou ultrapassou 1000:", soma);