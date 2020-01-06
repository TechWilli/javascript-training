const nomes = ['William', 'Rose', 'Isa', 'Weldon', 'Amanda', 'Mel', 'Murilo'];
const membros = ['William', 'Rose', 'Isa', 'Weldon'];

// funcao que retorna um objeto
const criarFamilia = (eu, mae, irma, pai) => {
    return {
        eu,
        mae, 
        irma,
        pai
    }
}

// usando spread operator para atribuir cada membro em um argumento na funcao
const familia = criarFamilia(...membros);


// for OF é usado EXCLUSIVAMENTE para arrays percorrendo seus elementos
for(nome of nomes) {
    console.log(nome);
}

/* for IN é usado para acessar as propriedades de um objeto caso seja
usado for OF dá erro de iteração, pois objeto nao é iterável*/
for(membro in familia) {
    console.log(membro, familia[membro]);
}

// porem nada impede de usarmos for IN em arrays, trazendo o indice de cada elemento
for(index in nomes) {
    console.log(index);
}

for(index in nomes) {
    console.log(index, nomes[index]);
}



