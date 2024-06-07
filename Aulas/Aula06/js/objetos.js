// Objetos literias em Javascript

// var pessoa = ['Fulano', 10, 'Rua XPTO', 30, 'Analista', 'Maria']
// var pessoa2 = new Object()

var pessoa = {
    nome: 'Fulano',
    idade: 10,
    endereco: 'Rua XPTO',
    numeroCasa: 30,
    cargo: 'Analista',
    conjuge: 'Maria',
    ehMaiorIdade: true,
    telefone: ["11778647926", "1188484846", "53684848448"],
    filhos: [
        {
            nome: "Joaozinho",
            idade: 10
        },
        {
            nome: "Luizinha",
            idade: 5
        }
    ]
}

console.log(pessoa)