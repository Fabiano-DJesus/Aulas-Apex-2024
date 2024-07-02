//metodo de manipular strings
let texto = "aula de javascript"

//sabero o tamanho de uma string
console.log(texto.length);

//trazer umcaracter de uma posição específica
console.log(texto.charAt(3));

// retorna uma palavra de uma string
console.log(texto.indexOf('java'));

//extrair uma parte da string substring
console.log(texto.slice(0, 8));

let novoTexto = texto.replace("java", "PHP")
console.log(novoTexto);

//transforma tudo em caixa alta
console.log(texto.toUpperCase());

//transforma tudo em letras minusculas
console.log(texto.toLowerCase());

//quebrar uma string num array
let dias = "domingo, segunda, terça, quarta, quuinta, sexta, sabado"

let diasArray = dias.split(", ")

console.log(diasArray);

//metodos para tratamntos de numeros

console.log(Number.isNaN(NaN));

//verificar se é inteiro
console.log(Number.isInteger(123.6));

//converter um numero que está como string no tipo number
let numero = "100"
console.log(typeof(numero));
numero = parseInt(numero);
console.log(typeof(numero));

//arredondar numero
console.log(Math.ceil(123.456));//arredonda pra cima
console.log(Math.floor(123.456));//arredonda pra baixo
console.log(Math.round(123.556));// arredonda pro lado mais próximo
