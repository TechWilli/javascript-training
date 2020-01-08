// Alguns modos de fazer um valor ser convertido para string

let numero = 100;

console.log(numero, typeof(100));

// concatenando o número como uma string vazia;
let numString = 100 + '';
console.log('PRIMEIRA FORMA:', numString, typeof numString);

// usando template string
let numString2 = `${numero}`;
console.log('SEGUNDA FORMA:', numString2, typeof numString2);

// usando JSON
let numString3 = JSON.stringify(numero);
console.log('TERCEIRA FORMA:', numString3, typeof numString3);

// usando método toString();
let numString4 = numero.toString();
console.log('QUARTA FORMA:', numString4, typeof numString4);

// usando a função String();
let numString5 = String(numero);
console.log('QUINTA FORMA:', numString5, typeof numString5);