let dados = `{
    "pessoas" : [
        {
            "nome" : "Fabiano", 
            "idade" : 38
        },
        {
            "nome" : "José", 
            "idade" : 45
        },
        {
            "nome" : "Maria", 
            "idade" : 33
        }
    ]
}`
let lista = JSON.parse(dados)

for(pos in lista.pessoas){
    console.log(lista.pessoas[pos].nome);
}