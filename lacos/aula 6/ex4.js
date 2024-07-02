let vetorA = [ 10, 8, 50, 14, 99]
let vetorB = [ 9, 10, 1, 24, 20]

let i = 0
while(i < vetorA.length){
    
    if(vetorA[i]> vetorB[i]){
        console.log(vetorA[i], "É maior que", vetorB[i]);
    } else if(vetorA[i] < vetorB[i]){
        console.log(vetorB[i], "É maior que", vetorA[i]);
}else{
console.log(vetorB[i], "é igual a ", vetorA[i])
}

i++
}