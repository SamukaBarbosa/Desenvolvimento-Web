var numero1 = 5
var numero2 = 10
var numero3 = "10"

var ehMaior = numero1 > numero2 // false
var ehMenor = numero1 < numero2 // true
var ehIgual = numero1 == numero2 // false
var ehMaiorOuIgual = numero1 >= numero2 // false
var ehMenorOuIgual = numero1 <= numero2 // true
var ehdiferente = numero1 != numero2 // true

var saoIguais = numero2 == numero3 // true (verifica valor)
var saoIdenticos = numero2 === numero3 // true (verifica tipo e valor)

alert(saoIguais)
alert(saoIdenticos)