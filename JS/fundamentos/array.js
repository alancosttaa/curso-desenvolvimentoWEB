/*Array são estruturas unidemensional, usamos uma estrutura para armazenar várias variáveis.Para acessá-las, usamos seu idenficadores, ou seja, usamos o identificador da variável "a" para acessá-la, o idenficador da variável "b" para acessá-la, etc.. Cada variável possui o seu identificador, e usamos a estrutura Array para agrupá-las. Esta estrutura é indexada, ou seja, identificamos atráves de um número(index) que corresponde a sua posição no array. A partir do número 0

O array em js, diferente de outras linguagens, ele é heterogêneo, o que é isso? Ele pode armazenar dentro do mesmo array, tipos diferentes de dados, ou seja, uma variável do tipo string, uma do tipo number, uma do tipo boolean,etc.. E o array nao possui tamanho fixo. 
 
*/

const valores = ["Alan", "Bruna", 26, 29, "Marcos", 54, "Denize", 55];

console.log(valores[0], valores [2]);
console.log(valores[1], valores[3]);
console.log(valores[9]);
valores[8] = 4;
console.log(valores[8]);
console.log(valores)

console.log("Nome: " + valores[0] + " " + "idade " + valores [2]);

console.log(valores.length); //QUANTIDADE DE ELEMENTOS DENTRO DO ARRAY.

valores.push("Nina menina"); //ADICIONA UM VALOR NO ARRAY
console.log(valores);

valores.pop(); //REMOVE O ÚLTIMO ELEMENTO DO ARRAY
console.log(valores);

delete valores[8];//REMOVE UM VALOR ESPECÍFICO
console.log(valores);

console.log(typeof valores)
