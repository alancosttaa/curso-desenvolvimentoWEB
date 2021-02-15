/*

 É um operador novo, que veio no ES6(2015), ele serve para desestruturação, mas o que seria isso? 

 Ele tira da estrutura, alguma coisa.. Mas, pera lá.. o que seria uma estrutura??? oO

 exemplo: Em obejto, é uma forma de vc extrair de dentro os seus atributos, em um array, ele tira um elemento.. que eu quero usar, tratar :)

 O DESTRUCTURING ele trabalha com duas sintaxes:

 Objeto: Quando estamos utilizando ele com o objetos, nos usamos em sua sintaxe as chaves {}

 Array: Quando estamos utilizando ele com o array, nos usamos em sua sintaxe os cochetes []

*/


const pessoa = {
    nome: "Alan",
    idade: 26,
    ender: {
        rua: "Conde de bonfim",
        numero: 505,
        bairro: "Iguabinha",
        cep: 28970.000
    }  
}

const {nome, idade} = pessoa // as chaves representam o destructuring = Eu quero tirar o que da estrutura pessoa? nome, idade, ou seja, tire do objeto o atributo "nome", "pessoa", ta bem!! Mas pera lá, de qual objeto? Do objeto "pessoa".. 

console.log(nome, idade);

const {nome: n, idade: i} = pessoa; // Do mesmo modo, eu posso atribuir nomes (variáveis) para esses valores
console.log(n, i);

const{sobrenome, sexo = false} =  pessoa;
console.log(sobrenome, sexo);

const {ender: {bairro, cep, numero}} = pessoa;
console.log(bairro, cep, numero);


//DESTRUCTING ARRAYS

const teste = [10,20,30];

const [valor1, , valor3, , valor5, valor6 = 100] = [40,50,60];

console.log(teste[2]);
console.log(valor1, valor3,valor5,valor6);

const [, [ , valor]] = [[ ,8,8], [9,6,11]];
console.log(valor);


//TAMBEM PODEMOS USAR O DESTRUCTING NAS FUNÇÕES COM OBJETOS


function testeObj ({min = 0, max = 1000}) {
    const aleatorio =  Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

console.log(testeObj({max: 50, min: 40}));

// ou posso passar como um objeto, irá dar no mesmo

const valorDes =  {max: 40, min: 10};
console.log(testeObj(valorDes));

//ou

console.log(testeObj({min: 950}))

/*
o que isso significa? 

({min = 0, max = 1000}) = dois atributos dentro de um operador destructing, isso significa que eu vou passar um objeto para essa função e dentro da minha função "testeObj" em vez de acessar objeto.min, objeto.max, eu quero que ele ja tire do objeto o atributo min e max, sem precisar acessar com a anotação ponto.
*/



//TAMBEM PODEMOS USAR O DESTRUCTING NAS FUNÇÕES COM ARRAYS

function testeArr([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max,min]
    const resultado = Math.random() * (max - min) + min;
    return Math.floor(resultado);
}


console.log(testeArr([50,40]));
console.log(testeArr([,10]));
console.log(testeArr([950]));
