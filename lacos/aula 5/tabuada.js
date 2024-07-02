/* function gerarTabuada(numero) {
    console.log("Tabuada do", numero , ":");
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}


gerarTabuada(7);*/

let numero = 9;

console.log("Tabuada do", numero , ":");

for (var i = 0; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}