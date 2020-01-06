const nomes = ['William', 'Rose', 'Isa', 'Weldon', 'Amanda', 'Mel', 'Murilo'];

// aqui desconstruo até o pai, depois junto os ultimos elementos com uma variavel usando spread
const [eu, mae, irma, pai, ...fernandes] = nomes;

console.log(eu);
console.log(mae);
console.log(irma);
console.log(pai);
console.log(fernandes);

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
console.log(modelo);

// dar outro nome à variavel
const { modelo:modeloMotoG } = celular;
const { modelo:modeloGalaxy } = celular2nd;

const showOwner = ({ dono }) => {
    return dono;
}

const donoMotoG = showOwner(celular);
const donoGalaxy = showOwner(celular2nd);

console.log(`Dono do celular ${modeloMotoG}: ${donoMotoG}`);
console.log(`Dono do celular ${modeloGalaxy}: ${donoGalaxy}`);

    

