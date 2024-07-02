/*for(Inicio; condição; incremento){

}

for(let i = 0; i < 100; i++){
    console.log("Número: ", i);
}*/ 


//Mostrar numero par ou impar
let parImpar
for (let i = 0; i < 100; i++) {
/*    if(i % 2 == 0){
        parImpar = "par"
    }else{
        parImpar = "Impar"
    }
    console.log("O número ", i, "é" , parImpar);*/
    console.log("O número ", i, "é" , (i% 2 ==0) ? "par" : "impar");
}
