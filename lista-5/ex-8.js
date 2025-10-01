const readlineSync = require("readline-sync")

let numero = readlineSync.questionInt("Digite um numero menor que 5: ")
while (numero >= 5) {
  numero = readlineSync.questionInt("Valor invalido. Digite um numero menor que 5: ")
}
let par = numero
if (par % 2 !== 0) {
  par++
}
console.log("Numeros pares entre " + numero + " e 20:")
while (par <= 20) {
  console.log(par)
  par += 2
}
