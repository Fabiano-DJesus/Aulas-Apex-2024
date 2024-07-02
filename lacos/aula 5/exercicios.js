// https://dontpad.com/bracellos/apexlogica/vetores

//CRIE UM PROGRAMA ONDE VAI SIMULAR UM MERCADINHO = 5 produtos

//ONDE TERA O NOME DO PRODUTO, QUANTIDADE E VALOR =

//NO FINAL, MOSTRE OS ITENS NO CARRINHO COM O SUBTOTAL DE PRODUTOS E POR FIM O VALOR TOTAL DA COMPRA


//FAÇA UM GERADOR DE TABUADA USANDO LAÇOS DE REPETIÇÃO - SEM VETOR



let produto =[
    ["Arroz"],
    ["Feijão"],
    ["Macarrão"],
    ["Açucar"],
    ["Sal"]
]
let quantidade = [
    1, 3, 2, 4, 1 
]

let valor = [
    1.99, 8.99, 3.99, 2.99, 0.99
]

for (pos in produto){
let total
for (let i in valor[pos]){
total = total + valor[pos][i]
}
let subTotal = (quantidade * valor)

console.log("produto: ", produto[pos],"quantidade: ", quantidade[pos], "valor: ", valor[pos], "Subtotal: ", Subtotal[pos] )


} 


