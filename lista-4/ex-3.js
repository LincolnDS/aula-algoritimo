import input from 'readline-sync'
let n1= input.questionInt("digite um numero")
if(n1>10){
    console.log("numero maior que 10:",n1)
}
else{
    console.log ("numero menor ou igual a 10:", n1)
}