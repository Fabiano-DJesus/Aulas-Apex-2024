//estrutura condicionais - de decisão


//se -> if / else / else if

if(true){
    true //executa se a condição for verdadeira
}else{
    false // executa se a condição for falsa
}  // (true) é a condição que tem que ser verdadeira, else é então para executar a condição falsa

let n = 10
if(n == 10){
    console.log("numero 10");
}else if(n == 11){
    console.log("número 11")
    }else{
        console.log("outro número");
    }

    //maior de idade?

    let idade = 39
    if(idade>=18){
        console.log("maior de idade");
    }else{
        console.log("menor de idade")
    }

    //nota com letras
let nota = 9
let notaLetra 
    if(nota>=9){
        notaLetra = "A";
        } else if(nota>=8){
            notaLetra = "B"
        }else if(nota>=7){
            notaLetra = "C";
        } else if(nota>=6){
            notaLetra = "D"
        }else if(nota>=5){
            notaLetra = "E"
        }else {
            notaLetra = "F"
        }

//swith case - ele avalia uma expressão e executa um bloco de código correspondente
let expressao = 1
switch (expressão) {
    case 1:
        console.log("Número 1");
        break;
        case 2:
            console.log("Numero 2");
        break;
case 3:
case 4:
case 5:
    console.log("Números entre 3 e 5");
    break

    default:
        console.log("um número não encontrado");
        break;
}

//