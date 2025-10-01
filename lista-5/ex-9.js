const readlineSync = require("readline-sync")

let numero = readlineSync.questionInt("Digite um numero maior que 20: ")
while (numero <= 20) {
  numero = readlineSync.questionInt("Valor invalido. Digite um numero maior que 20: ")
}
console.log("Numeros entre " + numero + " e 1 em ordem decrescente:")
while (numero > 1) {
  numero--
  console.log(numero)
}
