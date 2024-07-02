let pessoa = {
    nome: "Fabiano",
    idade: 39,
    cidade: "BLumenau",
    doadorDeOrgãos: true,
    anoNascimento: function(){
        return 2024 - this.idade
    }
}

console.log(pessoa.nome, pessoa.idade, pessoa.anoNascimento());

let pessoa2 = new Object()
pessoa2.nome = "Fabiano"
pessoa2.idade = 39
pessoa2.cidade = "Blumenau"
pessoa2.doadorDeOrgaos = true
pessoa2.anoNascimento = () => {
    return 2024 - this.idade
    }
    console.log(pessoa2);

// array e objeto juntos
let pessoas = [
    {nome: "Fabiano", idade: 38}
    {nome: "Maria", idade: 33}
    {nome: "José", idade: 45}
]
for (pos in pessoas) {
    console.log(pessoas[pos].nome); //console.log( 'Nome: '+pessoas[pos].nome+' idade: '+pessoas[pos].idade);
}

