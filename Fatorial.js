const fatorial = (fat) => {
    const numeros = [];

    for(let i = 1; i <= fat; i++) {
        numeros.push(i);
    }

    const result = numeros.reduce((total, next) => {
        return total * next;
    });

    return result;
}

const fat5 = fatorial(5);
const fat4 = fatorial(4);

console.log(fat5);
console.log(fat4);