// ***** Aprendendo SpreadOperator *****
// facilita operações com arrays e objetos

const conjunto = [1, 2, 3, 4, 5];

const conjunto2 = [6, 7, 8, 9];

const juncao = [...conjunto, ...conjunto2];

console.log(conjunto);
console.log(juncao);

const [a, b, ...c] = conjunto;
console.log(a);
console.log(b);
console.log(c);

const pessoa = {
    nome: 'Will',
    idade: 20,
    empresa: 'Pulse',
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    }
};

const { nome, idade, ...outros } = pessoa;

console.log(nome);
console.log(idade);
console.log(outros);

const novaPessoa = {
    ...pessoa,
    empresa: 'BExpert'
};

console.log(novaPessoa);