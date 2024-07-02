let clientes = [
    "diego",
    "anderli",
    "edcarlos",
    "fabiano",
    "jenifer"
]
let saldos = [
    [500000, 15000, 1],
    [85000, 750000, 30000],
    [450000, 78000, 79500],
    [345678, 78.14, 65.99],
    [98.99, 76000, 548790]
]

for (poscliente in clientes) {
    let total = 0
    let media = 0

    console.log("Cliente", clientes[poscliente]);
    for (possaldo in saldos[poscliente]) {
        total = total + saldos[poscliente][possaldo]
    }
    media = total / saldos[poscliente].length

    console.log("Total de Saldos: ", total);
    console.log("Média", media);
}