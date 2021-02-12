const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.87;
const avaliacao2 = 8.50;


const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); // fixa o resultado em quantas casa decimais quiser ex (2)
console.log(media.toString(2)); //converte para binário
console.log(typeof media); //tipo do dado que foi associado a variável média 
console.log(typeof Number); // tipo do Number


//OBJETO MATH

const raio = 5.16;
const area = Math.PI * Math.pow(raio,2); //MATH.POW é utilizado para calcular exponenciação 

console.log(area.toFixed(2));
console.log(typeof Math);

//ALGUNS CUIDADOS

console.log(7 / 2); //realizou normalmente a operação
console.log("10" - 8); // também realizou a operação de uma string com um número, pois o operador atribuido nao foi o "+"
console.log("3" + 2); //Nao realizou igual ao exemplo acima, pois o "+" tambem serve para concatenar valores.
console.log("Show" * 4); //"Nao realizou, pois temos uma cadeia de caracteres"
console.log(0.1 + 0.3); //realizou normalmente a operação
console.log((10.34539).toFixed(2)); //Arredondou o valor para cima ou para baixo
