/*Objetos em js são representados através do {}. Sempre será uma coleção de chaves e valores
  ex abaixo: chave deste objeto projeto será o 'nome' e o valor 'Iphone X'; Colocamos a chave em um objeto através do '.'
*/

const produto = {};
produto.nome = "smartphone Samsung Galaxy S20";
produto.preco = 2.597,45;

console.log(produto);
console.log(produto.nome, produto.preco);

const cliente = {  //dentro das {} as chaves são separadas dos valores através do ":"
    nome: "Alan",
    banco: "Nubank"
};

console.log(cliente);
console.log(cliente.nome);

//PODEMOS DECLARAR ATRIBUTOS PARA OS OBEJTOS DE DUAS FORMAS:

const obj = {};
obj.nome = "Bola";      // ATRIUINDO O VALOR ATRAVES DO PONTO
obj['nome2'] = "Bola2"; // ATRIUINDO O VALOR ATRAVES DO []

console.log(obj);

//TAMBEM PODEMOS FAZER DA SEGUINTE MANEIRA, ATRAVÉS DAS CHAVES, Q NO CASA ACEITARÁ AS DUAS VERSÕES DE ATRIBUIÇÃO UTILIZADAS NO EXEMPLO ACIMA

const obj2 = {
  nome: "bola 3",
  ['nome2']: "Bola 4",
}
console.log(obj2)