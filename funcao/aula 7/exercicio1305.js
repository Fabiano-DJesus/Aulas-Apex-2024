// Função para calcular o lucro com base em 20%
function calcularLucro(valorPeca) {
    return valorPeca * 0.20;
}

// Função principal
function main() {
    const pecas = [];

    // Cadastro das peças
    for (let i = 0; i < 10; i++) {
        console.log(Informações da peça ${i + 1}:);
        const nomePeca = prompt("Nome da peça:");
        const valorCusto = parseFloat(prompt("Valor de custo da peça: R$"));

        // Calcula o valor de venda
        const valorVenda = valorCusto + calcularLucro(valorCusto);

        // Armazena as informações da peça
        pecas.push({ nome: nomePeca, custo: valorCusto, venda: valorVenda });
    }

    // Mostra os valores de custo e venda de cada peça
    console.log("\nPeças cadastradas:");
    pecas.forEach((peca, index) => {
        console.log(Peça ${index + 1}:);
        console.log(Nome: ${peca.nome});
        console.log(Valor de custo: R$${peca.custo.toFixed(2)});
        console.log(Valor de venda: R$${peca.venda.toFixed(2)});
        console.log();
    });
}

// Chamada da função principal
main();