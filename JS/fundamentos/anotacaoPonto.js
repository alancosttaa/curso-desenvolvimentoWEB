
//O ATRIBUTO "THIS" tornou o atributo visível e acessível fora da função, podendo ser acessado por outros métodos, variáveis q estão fora da função, ou seja, tornou o atributo "nome" publico. Se eu colocasse var/let no lugar do this, este atributo nao ficaria visivel nem acessivel fora da função

function Obj(nome) {
    this.nome = nome;
    this.exc = function() {
        console.log("Exec....");
    }
}


const obj2 =  new Obj('Cadeira');
const obj3 =  new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exc();



function Teste(idade) {
    this.idade = idade;
    let soma = idade + 16;
    return soma;
    
}

let pessoa =  new Teste(24);
console.log(Teste(pessoa.idade));


function Teste2(idade) {
    this.idade = idade;
    idade += 10;
    return idade;
    
}

let pessoa2 =  new Teste2(26);
console.log(Teste2(pessoa2.idade));

