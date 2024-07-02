let alunos = [
    "Maria",
    "José",
    "João",
    "Henrique"
]

let idade = [
29, 40, 33, 19
]

//matriz

let notas = [
    [10, 8, 7.5],
    [9, 6, 9],
    [10, 8, 4],
    [3, 6, 1]
]
for (let pos in alunos){
let media = 0
let total = 0
for ( let i in notas[pos]){
total = total + notas[pos][i]
}
media = total / notas[pos].length
console.log("Nome: ", alunos[pos], "Idade: ", idade[pos], "Média:", media);
}