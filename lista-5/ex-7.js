const readlineSync = require("readline-sync")

let maior = readlineSync.questionInt("Digite um numero maior que 10: ")
while (maior <= 10) {
  maior = readlineSync.questionInt("Valor invalido. Digite um numero maior que 10: ")
}
let menor = readlineSync.questionInt("Digite um numero menor que 5: ")
while (menor >= 5) {
  menor = readlineSync.questionInt("Valor invalido. Digite um numero menor que 5: ")
}
console.log("Numero maior que 10: " + maior)
console.log("Numero menor que 5: " + menor)
