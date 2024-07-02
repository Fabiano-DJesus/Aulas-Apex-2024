let itens = []
console.log(itens);
//push - empurra - adciona um ou mais elementons no fim do array
itens.push('cerveja')
console.log(itens);
itens.push('picanha')
console.log(itens);
//unshift - adicionaum ou mais itens no inicio de um vetor
itens.unshift("Sal de parrilha") // separar itens por vírgulas que adiciona mais de 1 item
console.log(itens);
//pop - remove o últimoitem do vetor
itens.pop()
console.log(itens);

//shift - remove o primeiro item do vetor
itens.shift()
console.log(itens);

let itens2 = [
    "carvão",
    "farofa",
    "maionese",
    "linguicinha"
]

//juntar dois vetores
let juntar = itens.concat(itens2)
console.log(juntar);

//mapear um array
let maiusculas = juntar.map(juntar => juntar.toUpperCase())

console.log(maiusculas);

// filtrar array
let palavrasGrandes = juntar.filter(juntar => juntar.length >= 7) // => função anônima
console.log(palavrasGrandes);