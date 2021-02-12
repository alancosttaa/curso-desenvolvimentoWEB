function somar(a,b){
    soma = a + b;
    return soma;
}

console.log(somar(1,5));


//------------------------- //
function subtrair(a,b){
    var sub = a - b;
    console.log(sub);
}

subtrair(5,1)

//------------------------- //
function multiplicacao(){
    var a = 5;
    var b = 2;
    return resultado = a * b;
}

console.log(multiplicacao(multiplicacao.a,multiplicacao.b));

//Em js também podemos armazenar uma função dentro de uma variável

//------------------------- //
const imprimirValores = function (valor1, valor2) {
     return valor1 + valor2;
}
console.log(imprimirValores(10,20));

//------------------------- //
const funcaoTeste = function (nome, idade) {
    var nome, idade;
    console.log(nome,idade);
}  

funcaoTeste("Alan",26)


//------------------------- //
const funcaoTeste2 = function () {
    nome: String;
    idade: Number;
    console.log(funcaoTeste2.nome,funcaoTeste2.idade);
}

funcaoTeste2(funcaoTeste2.nome = "Marcos",funcaoTeste2.idade = 65 );

const exemplo2 =  function (nome, idade) {
    var nome, idade;
    console.log(exemplo2.nome, exemplo2.idade);
}

exemplo2(exemplo2.nome = "Ezequiel", exemplo2.idade = 18);
