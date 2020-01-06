// criando uma função que engloba alguns conceitos de JS

function getCountryState(city) {
    city = city.toUpperCase();

    const states = {
        'SP': () => 'São Paulo',
        'MG': () => 'Minas Gerais',
        'RJ': () => 'Rio de Janeiro',
        'default': () => 'Estado não encontrado'
    };
    
    // aqui como o value da property é uma função, precisa-se invocá-la com o () no final
    return (states[city] || states['default'])();
}

let estado = getCountryState('SP');
console.log(estado);

estado = getCountryState('rJ');
console.log(estado);