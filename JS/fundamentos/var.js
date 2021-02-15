/*
Dentro do js, uma variável declarada com a palavra reservada VAR, só tem dois escopos possíveis:

Quando criamos uma variável var fora de uma função, esta mesma variável se torna global.

escopos = bloco de códigos, local onde a variável foi definida

FUGA DO ESCOPO GLOBAAAAL

*/

{{{{var teste = "ola"}}}}

console.log(teste);


function varTeste(){
    var oi = 123;
    console.log(oi)
}

varTeste();
//console.log(oi)


var numero = 1;

{
    var numero = 2;
    console.log("Dentro do bloco " + numero);
}

console.log("Fora do bloco " + numero);
