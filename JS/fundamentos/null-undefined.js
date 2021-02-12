let valor; //não inicializada
console.log(valor);

valor = null // ausência de valor, porém após receber o "null" a variável foi inicilizada, sendo assim, saiu do estado "idenfinido", ou seja, "undefined". Null = Não aponta para nenhum endereço de memória, vazia. Usamos null caso queiramos zerar um valor de uma variável

console.log(valor);


const produto = {};
console.log(produto.preco);

produto.preco = 85;

console.log(produto.preco)

produto.preco = null;
console.log(!!produto.preco)
delete produto.preco; //USAMOS PARA RETIRAR UM ATRIBUTO DE UM OBJETO

console.log(produto.preco)
console.log(produto)


