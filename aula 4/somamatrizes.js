let vetorA = [
    [15, 25], 
[187, 210]
]

let vetorB = [
    [34, 33],
    [187, 345]
]

let vetorC = []


for( let posicao in vetorA){
   vetorC[posicao]= []
   let total = 0
    for(let pos in vetorA[posicao]){
                total = (vetorA[posicao] [pos] + vetorB[posicao][pos])
                vetorC[posicao][pos] = total
}

}

console.log(vetorC);