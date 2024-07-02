let produtos =[
    "fejijão",
    "arroz",
"açucar",
"oleo"
]
let quantidade = [
2, 4, 5, 6
]
let valorUnitario = [
2.99 , 5.25 , 9.56 , 8.99
]
let totalCompra = 0
for (pos in produtos){
    let subtotal = 0 
    subtotal = valorUnitario[pos] * quantidade[pos]
console.log("produto", produtos[pos],"quantidade", quantidade[pos],
    "Valor unitáio", valorUnitario[pos], "Subtotal:", valorUnitario[pos] * quantidade[pos]
);
totalCompra = totalCompra + subtotal
}
console.log("Total da compra é:", totalCompra)