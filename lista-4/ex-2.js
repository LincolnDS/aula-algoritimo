import input from 'readline-sync'
let n1= input.questionInt("digite um numero")
let n2= input.questionInt("digite o numeoro")
if (n1<n2){
    console.log(n1+5)

}
else{
console.log(n2+5)
    
}
if (n1>n2){
    console.log("o numeoro maior é:",n1)
}
else{
    console.log("o numero maior é:",n2)
}