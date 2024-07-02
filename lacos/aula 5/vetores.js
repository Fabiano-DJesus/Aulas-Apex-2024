let dias = [
    "Domingo", // 0
 "Segunda", // 1
  "Terça",  // 2
  "Quarta", 
  "Quinta", 
  "Sexta", 
  "Sábado"
]
console.log(dias[2]);
 for(let i = 0; i < dias.length; i++){ // length = comprimento
console.log(dias[i]);
    console.log(i, " => ", dias[i]);

} 

 for(pos in dias){
console.log(dias[pos]);
} 

let i = 0

while(i < dias.length){
console.log(dias[i]);
i++
}