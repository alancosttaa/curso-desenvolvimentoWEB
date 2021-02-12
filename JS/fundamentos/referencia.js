/*
  Referência: Quando estamos trabalhando com tipos primitivos da linguagem como number, string, nós não fazemos referência, ou seja, nao apontamos para o mesmo endereço de memória, quando estamos com tipo primitivo, nos apenas fazemos uma cópia dos valores, uma cópia do valor é passado para a outra variável em questão, de tal forma que "d" tenha o seu valor e "c" tenha o seu e esses valores são independentes. Quando estamos trabalhando com objetos em js, essa atribuição é feita por referência, ou seja, a variável "a" e a variável "b" apontam para o mesmo objeto em memória e com isso faz que, se mudarmos o valor de "a" o "b" irá perceber e mudar também, do mesmo jeito se fosse ao contrário, se mudarmos o valor de "b" o "a" tbm irá perceber e mudar.
*/

const a =  {
   nome: "Teste"
};

console.log(a);

const b =  a ;

console.log(b)

b.nome = "Alan";

console.log(b);
console.log(a);

let c = 10;
let d = c;
d++;
console.log(d);
console.log(c);