function imprimirNome(nome, fcb1, fcb2) {
    console.log(nome)

    fcb1()
    fcb2(imprimirSobrenome)
}

function imprimirSobrenome(sobrenome) {
    console.log(sobrenome)
}

// imprimirNome('Fulano', imprimirSobrenome)

imprimirNome('Miguel', 
    () => {
    console.log('Ribeiro')
}, function(cb) {
    cb('Teste')
})

