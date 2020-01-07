//Criando uma função que retorna nos termos da sequência de fibonacci

const fibonacci = (termo) => {
    let a = 0, b = 1;

    const sequencia = [0];

    for(let i = 0; i < termo; i++) {
        //usando conceitos de desconstrução de variavel
        [a, b] = [b, a + b];
        
        sequencia.push(a);
    }

    return sequencia;
}

const fibo10 = fibonacci(10);
console.log(fibo10);