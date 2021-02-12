/*

Variavel declarada com a palavra reservada LET, possui, escopo global, escopo de função e escopo de bloco

*/


var numero = 1 ;

{
    let numero = 2;
    console.log('Dentro ' + numero);
}

console.log('Fora ' + numero);


let a = 1 ;

{
    let a2 = 2;
    console.log('Dentro ' + a2);
}

console.log('Fora ' + a);