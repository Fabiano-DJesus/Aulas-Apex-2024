// array
/* let lista = [
    "Picanha",
    "Sal",
    "Maionese",
    "Carvão",
    "Refri",
]
/*for (let i = 0; i < lista.length; i++) {
    console.log(i, " => " , lista[i]);    
}*/

// percorrendo um array com for in
/*for (index in lista) {
  console.log(lista[index]);   
 }*/

 let pessoas = [
    ["Diego", 25],
    ["Pedro", 60],
    ["Paulo", 22]
 ]
 for (index in pessoas) {
    console.log(index, " => ");
    for(pos in pessoas[index]){
        console.log("   ", pos,  " => ", pessoas[index][pos]);
        
    }   
    }
 