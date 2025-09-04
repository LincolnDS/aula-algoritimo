import input from 'readline-sync'
let num1 = input.questionInt("digite o numero1")
let num2 = input.questionInt("digite o numero2")
let num3 = input.questionInt("digite o numero3")

let resp1 = num1 + 5
let resp2 = num2 + 5 
let resp3 = num3 + 5 

if(resp1>10, resp2>10, resp3>10){
    console.log("num1", resp1)
    console.log("num2", resp2)
    console.log("num3", resp3)
}