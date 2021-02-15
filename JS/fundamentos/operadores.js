/*
 em js nos temos dois tipos de comparação:

 1 -  leva em conta o valor do dado a ser comparado. ==
 2 -  leva em conta o tipo e o valor do dado.       ===
*/

console.log("01 - " , "1" == 1); // levou em consideração o valor do dado 1 e nao q ela estava como string alterando assim o seu tipo de string com o tipo número. Dando q eles são iguais.
console.log("02 - " , "1" === 1); // Nesse caso, com o === ele considera o valor e o tipo do dado, um sendo string e o outro numero.
console.log("03 - " , "1" != 1); //Mesma coisa nos casos a seguir
console.log("04 - " , "1" !== 1);



/*Operadores lógicos

Usando o operador  E &. Todas as condições precisam ser verdadeiras para que o resultado seja verdadeiro, ex:

v e v = v;
v e f = f;
f e v = f;
f e f = f;

Usando o operador OU ||. Basta que apenas uma única condição seja verdadeira, para obtermos o resultado verdeiro.

v ou v = v;
v ou f = v;
f ou v = v
f ou f = f;


O ou exclivo, obrigatoriamente os dois tem que ser diferentes para o resultado tem que ser verdadeiro

v xor v = f;
v xor f = v;
f xor v = v;
f xor f = f;

tbm temos a negação lógica

!v = f;
!f = v;

*/


function compras(trabalho1, trabalho2 ) {
    const tomarSorvete =  trabalho1 || trabalho2 ;
    const comprarTV50  =  trabalho1 && trabalho2;
   // const comprarTV32  =  !!(trabalho1 ^ trabalho2);
    const comprarTv32   =  trabalho1 != trabalho2;
    const manterSaudavel = !tomarSorvete;

   return {tomarSorvete, comprarTV50, comprarTv32, manterSaudavel};
}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));


//Operador ternário. Como o próprio nome diz, possui três operações. Primeira parte do operado ternário, é uma operação relacional "se nota é maior q 7", se for verdadeiro, irá retornar a primeira, caso seja falso a segunda.

const operacao = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log("Resultado foi: ", operacao(6));

