//declarando função
function helloworld(params) {
    console.log("olá mundo");
}
//chamndo função
helloworld()

function saudacao(nome, sobrenome) {
    console.log("olá", nome+" "+sobrenome," seja bem vindo");
}

saudacao("diego", "bracellos,")

function retorno(nome) {
    return nome.toUpperCase()
}

console.log(retorno("Diego Bracellos"));