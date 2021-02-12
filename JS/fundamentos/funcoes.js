/*
A função exerce um papel central no js, assim como os objetos e arrays. O objeto em js é uma função. Quase tudo em js é função, objeto, qualquer classe é uma função.
O js é altamente centrado em funçãoes, Dentro de uma função podemos ter:

 - atributos: dados
 - outras funções
 - armazenar uma função dentro de uma variável
 - passar uma função como parâmetro, etc.

 Mas, o que seria uma função? 

 Fazendo uma analogia com uma receita de bolo. Uma Função é um verbo, uma ação, ou seja, ela executa um processo baseado na sentença de código, está associada a um bloco "{}". Uma função nada mais é que um trecho de código, que demos um nome e podemos reutilizar mais vezes duratne a execução do programa. Exemplificando:

 Uma Função é um bloco de código nomeado, que chamamos quando quisermos no código, agrupado pelo corpo da função

 Uma função recebe alguns ingredientes de entrada que são os dados, dentro dessa função será realizado todo o passo a passo e no final nos retornamos um resultado

 Uma função pode não receber nenhum ingrediente, ou seja, não receber nenhum parâmetro

 Uma função pode não retornar dado

 Uma função pode nao receber nenhum parametro, mas retornar algum dado.

 Uma função pode não receber nenhum parametro e nao retornar nada

 Uma função pode receber um parametro e retornar um dado
 
 Uma função arrow =  é termos uma foram reduzida de representar uma função

Definindo uma função:

function nomedafunção() {}

function = palavra reservada da linguagem para criarmos uma função
nomedafuncao = nome q a função irá receber
() = ingredientes, ou seja, se irá receber valores, parametros de entrada
{} = bloco de código irá ai dentro

*/

console.log(typeof Object);
class Produto {}
console.log(typeof Produto);

//TIPOS DE FUNÇÕES

// Função sem retorno 

function imprimirSoma(a,b){
    console.log(a + b);
}

imprimirSoma(2,3);

//Função com retorno

function soma(a,b){
    return a + b;
}

console.log(soma(2,4));

function soma(a, b = 0){ //funçao com um valor definido
    return a + b;
}

console.log(soma(2,4));

//armazenando uma função em uma variável

const imprimirResultado =  function(a,b){
    console.log(a+b);
}
imprimirResultado(2,3);

//armazenando uma função arrow em uma variável
const resultado =  (a , b) => {
  return a + b;
}

console.log(resultado(9,1));

//deixando o retorno implícito

const valor = (a,b) => a + b;

console.log(valor(8,10));