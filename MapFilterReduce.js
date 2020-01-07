// Algumas funções super úteis para tratar arrays no JS

const colegas = ['Danilo', 'Gaby', 'Yama', 'Caio', 'Marcelo', 'Daniel', 'Douglas'];

const notas = [
    {
        nome: 'William',
        p1: 10,
        p2:10
    },
    {
        nome: 'Amanda',
        p1: 9,
        p2: 2.5
    },
    {
        nome: 'Melissa',
        p1: 9.4,
        p2: 5
    }
];

//MAP
const medias = notas.map((aluno) => {
    return {
        aluno: aluno.nome,
        media: (aluno.p1 + aluno.p2) / 2
    }
        
});

console.log(medias);

//FILTER
const nomesComD = colegas.filter((nome) => {
    return nome[0] === 'D';
});
// console.log(nomesComD);

const aprovados = medias.filter((aluno) => {
    return aluno.media >= 6;
});

console.log(aprovados);

// forEach
aprovados.forEach((aprovado) => {
    console.log(`${aprovado.aluno} foi aprovado/a`);
});
