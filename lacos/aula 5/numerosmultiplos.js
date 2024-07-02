let numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99, 101]

let soma = 0;
for (let i =0; i < numeros.length; i++){
    soma += numeros[i];
}

let media = soma / numeros.length;

console.log("soma dos números: ", soma);
console.log("média dos números: ", media);