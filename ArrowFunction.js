// ***** APRENDENDO CONCEITOS DE ARROW FUNCTION *****

// funcao normal declarada com function
function somarDoisNumeros(num1, num2) {
    return num1 + num2;
}

let resultado = somarDoisNumeros(5, 5);

console.log(resultado);

function dizerOla(nome) {
    console.log(`Olá, ${nome}`);
}

dizerOla();
dizerOla('William');

// funcao anonima com function
const somarNumeros = function(num1, num2) {
    return num1 + num2;
}

resultado = somarNumeros(10, 10);

console.log(resultado);

const dizerOi = function(nome) {
    if(nome === undefined) {
        console.log('Oi, Zé Ninguém');
    } else {
        console.log(`Oi, ${nome}`);
    }
}

dizerOi();
dizerOi('Amanda');

// funcao com arrow function
// quando haapenas uma linha no corpo da função da pra deixar tudo em uma linha só
const saySomething = () => {
    console.log('Alguma coisa foi dita');
}

const saySomething2 = () => console.log('Alguma coisa foi dita de novo');

const somarNums = (num1, num2) => {
    return num1 + num2;
}

// quando ha apenas um return, também dá para deixar a função em uma linha só
const somarNums2 = (num1, num2) => num1 + num2;

saySomething();
saySomething2();

let result = somarNums(1, 2);
console.log(result);

result = somarNums2(2, 4);
console.log(result);

// quando há apenas um argumento passado, da pra passar sem parenteses
const teste = argumento => {
    return argumento;
}

const teste2 = (argumento) => {
    return argumento;
}

let testeVar = teste('Will');
console.log(testeVar);

testeVar = teste2('iam');
console.log(testeVar);

