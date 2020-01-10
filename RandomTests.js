const banco = {
    conta: '0000 11111-2',
    titular: "William",
    saldo: 1000,
    sacar: function (valor) {
        banco.saldo -= valor;
    },
    depositar: function (valor) {
        banco.saldo += valor;
    }
};

console.log(banco.saldo);
banco.sacar(100);

console.log(banco.saldo);

banco.depositar(200);
console.log(banco.saldo);


// console.log('1 - Saldo inicial: ', banco.saldo);
// console.log('2 - Saldo depois do aumento: '+ banco.saldo + 2000);

// // resolvendo o problema colocando virgula
// console.log('3 - Saldo depois do aumento: ', banco.saldo + 2000);


// // outro jeito de resolver o problema é criar uma variavel
// let aumento = banco.saldo + 2000;

// console.log('4 - Saldo depois do aumento :' + aumento);

// // forma ideal de resolver tudo
// console.log(`5 - Saldo depois do aumento: ${banco.saldo + 2000}`);

const names = ['Will', 'Amanda', 'Melissa', 'Nick'];
index = Math.floor(Math.random() * names.length);

console.log(names[index]);