//
const agora = new Date()

console.log("Dia do mes: ", agora.getDate());
console.log("Dia da semana: ", agora.getDay());
console.log("Dia da semana: ", agora.getMonth());
console.log("ano: ", agora.getFullYear());

//data por extenso
let meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
]
console.log(`Blumenau, ${agora.getDate()} de ${meses[agora.getMonth()]} de ${agora.getFullYear()}`);
