import input from 'readline-sync'
let num1 = input.questionInt("digite o numero 1:")
let num2 = input.questionInt("digite o numero 2:")
if(num1, num2<20){
    let resp1 = num1 * 10
    let resp2 = num2 * 10
    console.log("num1", resp1)
    console.log("num2", resp2)
}