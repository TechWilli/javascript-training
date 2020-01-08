// O REST OPERATOR é usado para trabalharmos com arrays dentro de funções
// passando múltiplos argumentos

function imprimirSemRest(itens) {
    console.log(itens);
}

// aqui sem o rest ele só captura o primeiro parametro passado
imprimirSemRest('william', 'marcus');


function imprimirComRest(...itens) {
    console.log(itens);
    // itens.forEach((item) => {
    //     console.log(item);
    // });
}

// aqui já da pra passar multiplos valores
imprimirComRest('carol', 'felipe', 5, 2, 'jooj');
