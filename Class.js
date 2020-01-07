class Pessoa {
    constructor(nome, sobrenome, idade, sexo) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._idade = idade;
        this._sexo = sexo;
    }

    get nome() { return this._nome; }

    set nome(novoNome) { this._nome = novoNome; }

    get sobrenome() { return this._sobrenome; }

    set sobrenome(novoSobrenome) { this.sobrenome = novoSobrenome; }

    get idade() { return this._idade; }

    set idade(novaIdade) { this._idade = novaIdade; }

    get sexo() { return this._sexo; }

    set sexo(novoSexo) { this.sexo = novoSexo; }

    getNomeCompleto() {
        return `${this._nome} ${this._sobrenome}`
    }

    dizerOla() {
        console.log(`Olá, me chamo ${this._nome}!`);
    }

    // método que só pode ser acessado pela classe
    static getNomeCientifico() {
        return 'Homo sapiens';
    }
}

class Funcionario extends Pessoa{
    // continuar código depois
}


const pessoa = new Pessoa('William', 'Assis', 20, 'M');

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.sexo);
console.log(pessoa.getNomeCompleto());

console.log(Pessoa.getNomeCientifico());


