const prompt = require('prompt-sync')()
let pessoas =[]
let acao 
do {
    console.log(`
    1 - cadastro
    2 - listar dados
    0 - sair    
    `);
    acao = parseInt(prompt("Escolha uma opção do menu: "))
    switch (acao) {
        case 1:
            console.log("cadastro");
            cadastro()
            break;
        case 2:
            console.log("listar dados");
            listar()
            break;
        case 0:
            break;
        default:
            console.log("valor inválido");
            break;
        }

}while(acao !== 0)
    console.log("programa encerrado");


    //funções
    function cadastro() {
        let nome = prompt("Informe o seu nome: ")
        let email = prompt("Informe o e-mail: ")
        let telefone = prompt("Informe o telefone: ")
        // adicionar os dados em um objeto e posteriormente no array
        pessoas.push({
            nome : nome,
            email : email,
            telefone : telefone
        })
        console.log("Cadastro realizado com sucesso.")
    }

    function listar() {
        console.log("------------LISTAR CADASTROS------------------");
        for(pos in pessoas){
            console.log(`NOME: ${pessoas[pos].nome} | E-MAIL: ${pessoas[pos].email} | TELEFONE: ${pessoas[pos].telefone} `);
        }
        console.log("--------------FIM---------------");
    }