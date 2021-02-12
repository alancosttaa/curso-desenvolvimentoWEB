const escola = "C3lina";

console.log(escola.charAt(4)); // serve para pegar o caractere específico, q neste caso foi delimitado o valor 4
console.log(escola.charCodeAt(5)); //serve para pegar o unicode do caractere escolhido
console.log(escola.indexOf('3')); //sere para mostrar o index

console.log(escola.substring(2)); //serve para mostrar 
console.log(escola.substring(0,4)); //serev para mostrar as substring começando de um valor e terminando em outro


console.log("Escola " .concat(escola).concat("!")); //serve para concatenação, ou seja, juntar strings
console.log(escola.replace(3, "e")); //serve para trocar palavras
console.log("Escola " + escola + "!");
console.log("Alan,Bruna,Marcos,Denize".split(",")); // serve para criar um array

