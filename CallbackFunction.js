// ***** Aprendendo conceitos de Callbacks*****

const imprimeResultado = (resultado) => console.log(`O resultado é ${resultado}`);

const somar = (a, b, result) => {
    result(a + b);
    return a + b;
}

const soma = somar(5, 1, imprimeResultado);

console.log(soma);

const testeSoma = soma + 1;
console.log(testeSoma);



const dizerOiETchau = (callback) => {
    console.log('Oi');
    callback();
} 

const tchau = () => {
    setTimeout(() => console.log('Tchau'), 2000);
}

dizerOiETchau(tchau);