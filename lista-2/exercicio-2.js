const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite um número: ", numero => {
  console.log("O resultado da operação é:", (Number(numero) - 3) * 2)
  rl.close()
})