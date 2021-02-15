

console.log(typeof Object);
console.log(typeof new Object()); // com o new nos estamos instanciando (criando) um novo objeto, podemos tanto utilizar o "()" no final ou nao, como no exemplo "Produto" que está sem, porém funciona do mesmo jeito

const Cliente = function (){};
console.log(typeof Cliente);
console.log(typeof new Cliente());

class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto);

// A forma de criar um objeto em js, é através de função, pois quase tudo em js é função
