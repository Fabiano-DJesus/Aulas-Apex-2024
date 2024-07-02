//Operadores Relacionais

//Maior que >

console.log(10 > 9); //true

//menor que -> <

console.log(10<11);//true

//maior ou igual -> >=

console.log(10>=10); //true

//menor ou igual -> <=

console.log(10<=10); //true

// operador de igualdade -> == 

console.log(10==10); //true

//operador de igualdade estrita -> === compara tipo e valor
let n1 = 100 // number
let n2 = "100" // string

console.log(n1===n2); //false

//operador diferente de -> !=
console.log(5 != 10); //true
console.log(5 != "5"); //false

//operador diferente de (extrito) !==
console.log(5 !== 10); //true
console.log(5 !== "5"); // true
console.log(5 !== 5); //false

//OPERADORES LÓGICOS
//Operador And(e) -> && o resultado é true desde que todas as experessões sejam verdadeiras
console.log(true && true); // true
console.log(false && true); //false

//OPerador Or(ou) -> || pelo menos uma das expressões tem que ser verdadeira
console.log(true || false); // true
console.log(false || false) // false

//Operador de negação (not) -> ! o exclamação inverte a afirmativa
console.log(!true); //false


//operadores aritméticos
//adição -> +
//Subtração -> - 
//Multiplicação -> *
//Divisão -> /
//Módulo -> % retorna o resto da divisão de dois numeros
console.log(7 % 3);//1
//Exponenciação -> ** eleva um valor a potencia do outro
console.log(2**3); //8

//incremento
let v1 = 10
v1++
console.log(v1); //11

//decremento
let v2 = 10
v2--
console.log(v2--); //9

//atrbuição aitmética
//adição
let a = 10
a += 10 // variável 'a' passa a ter o valor 20

//subtração -=
//divisão /=
// multiplcação *=
//modulo
let mod = 4
mod %= 3