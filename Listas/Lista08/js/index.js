document.getElementById('conta').textContent = 0

function escrever(num) {
    let num1 = document = document.getElementById('conta').textContent
    if (num1 != 0) {
        document.getElementById('conta').textContent = num1 + num
    } else {
       document.getElementById('conta').textContent = num 
    }
}

function exibirResultado() {
    let resultado = document.getElementById('conta').textContent
    document.getElementById('conta').textContent = eval(resultado)
}

function clearDisplay() {
    let display = document.getElementById('display').textContent
    document.getElementById('conta').textContent = display(display)
}