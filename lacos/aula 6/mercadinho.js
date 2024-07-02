var carrinho = [];


function adicionarProduto(nome, quantidade, valorUnitario) {
    var subtotal = quantidade * valorUnitario;
    carrinho.push([nome, quantidade, valorUnitario, subtotal]);
}


function calcularTotal() {
    var total = 0;
    for (var i = 0; i < carrinho.length; i++) {
        total += carrinho[i][3];
    }
    return total;
}

function exibirCarrinho() {
    console.log("===== Carrinho de Compras =====");
    for (var i = 0; i < carrinho.length; i++) {
        console.log("Produto: " + carrinho[i][0] + " | Quantidade: " + carrinho[i][1] + " | Valor Unitário: R$" + carrinho[i][2].toFixed(2) + " | Subtotal: R$" + carrinho[i][3].toFixed(2));
    }
    console.log("Total da compra: R$" + calcularTotal().toFixed(2));
}


adicionarProduto("Arroz", 2, 7.58);
adicionarProduto("Feijão", 1, 8.95);
adicionarProduto("Macarrão", 3, 2.99);
adicionarProduto("Açucar", 3, 1.99)


exibirCarrinho();
