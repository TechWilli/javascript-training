// A desconstrução de arrays e objetos é uma funcionalidade indispensável do JS

const nomes = ['William', 'Rose', 'Isa', 'Weldon', 'Amanda', 'Mel', 'Murilo'];

// aqui desconstruo até o pai, depois junto os ultimos elementos com uma variavel usando spread
const [eu, mae, irma, pai, ...fernandes] = nomes;

// console.log(eu);
// console.log(mae);
// console.log(irma);
// console.log(pai);
// console.log(fernandes);

const celular = {
    modelo: 'Moto G',
    ano: 2018,
    cor: 'prata',
    dono: 'William'
};

const celular2nd = {
    ...celular,
    dono: 'Amanda',
    modelo: 'Galaxy'
};

// pegar o modelo do cleular
const { modelo } = celular;
// console.log(modelo);

// dar outro nome à variavel
const { modelo:modeloMotoG } = celular;
const { modelo:modeloGalaxy } = celular2nd;

const showOwner = ({ dono }) => {
    return dono;
}

const donoMotoG = showOwner(celular);
const donoGalaxy = showOwner(celular2nd);

// console.log(`Dono do celular ${modeloMotoG}: ${donoMotoG}`);
// console.log(`Dono do celular ${modeloGalaxy}: ${donoGalaxy}`);

const person = {
    name: 'William',
    lastName: 'Assis',
    age: 20,
    family: {
        mother: 'Rose',
        father: 'Weldon',
        sister: 'Isa'
    },
    company: {
        name: 'PulseCRM',
        job: 'Developer'
    }
};

let { name, lastName } = person;
let { age:idade } = person;

idade = 25

// console.log(name, lastName);
// console.log(`Idade desconstruída: ${idade}`);
// console.log(`Idade do objeto person ${person.age}`)
// o objeto person continua sem alterações;

const linguagens = ['JS', 'Python', 'Ruby', 'C'];

// há dois modos de desconstruir um array:
const [ js ] = linguagens;
const { 0:js2 } = linguagens;

// console.log(js);
// console.log(js2);

// Para pegar um elemento especifico basta pular ele com virgulas
const [, py, , c] = linguagens;

// Neste modo é só colocar o índice:
const { 1:py2, 3:c2 } = linguagens;

console.log(py, c)
console.log(py2, c2);
