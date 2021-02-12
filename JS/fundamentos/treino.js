let nome = "Alan Marchetti da Costa";
let idade = 26;
let situacao =  false;
let complemento = ["cidade","cep","Araruama",28970.000];

let pessoa = {
    nome: nome,
    idade: idade,
    verificador: situacao,
    cpf: '165.509,698.10',
    endereco: "rua conde de bonfim"
}

console.log(pessoa);
console.log(pessoa.verificador = true);


let informacoes = {
    pessoais: pessoa,
    publicas: ["bairro","cep"],
    complemento: complemento
    
}

console.log(informacoes)
console.log(informacoes.publicas[1]);
console.log(informacoes.publicas.length)