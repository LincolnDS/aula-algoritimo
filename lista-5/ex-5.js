const readlineSync = require("readline-sync")

let n1 = readlineSync.questionInt("Digite o primeiro numero: ")
let n2 = readlineSync.questionInt("Digite o segundo numero: ")
let n3 = readlineSync.questionInt("Digite o terceiro numero: ")
let maior, segundoMaior
if (n1 >= n2 && n1 >= n3) {
  maior = n1
  segundoMaior = n2 >= n3 ? n2 : n3
} else if (n2 >= n1 && n2 >= n3) {
  maior = n2
  segundoMaior = n1 >= n3 ? n1 : n3
} else {
  maior = n3
  segundoMaior = n1 >= n2 ? n1 : n2
}
if (segundoMaior > maior) {
  let temp = maior
  maior = segundoMaior
  segundoMaior = temp
}
let numero = segundoMaior + 1
console.log("Numeros entre " + segundoMaior + " e " + maior + ":")
while (numero < maior) {
  console.log(numero)
  numero++
}