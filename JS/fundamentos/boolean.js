let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);


isAtivo =  3;
console.log(!!isAtivo); // "!" negação duas vezes vira verdadeiro

isAtivo =  3;
console.log(!isAtivo);//"!" negação uma vez fica falso.

console.log("valores verdadeiros...");

console.log(!! 3);
console.log(!! " ");
console.log(!! "texto");
console.log(!! []);
console.log(!! {});
console.log(!! (isAtivo = true));
console.log(!! (isAtivo = 5));
console.log(!! Infinity);

console.log("valores falso...");

console.log(!! 0);
console.log(!! '');
console.log(!! null);
console.log(!! NaN);
console.log(!! (isAtivo = 0));
console.log(!! (isAtivo = false));
console.log(!! undefined);


console.log("na lógica")

console.log(!!(null || 0 || "" || "epa"));

console.log("na lógica")

console.log(!!(null || 0 || NaN || "epa"));

console.log("na lógica")

console.log(!!(null || 0 || "" || undefined));

let nome = "";
console.log(nome || "Desconhecido");
