"use strict"

let num = 7, num1 = 3

let res = num % num1
 
console.log("O resto da divisão é: " + res)


let idade = 13

if(idade >= 18){
    console.log("Você é maior de  idade de acordo com a lei brasileira")    
}else if(idade >= 13){
    console.log("Voce é adolescente")
}else{
    console.log("Voce é criança")
}

let obj1 = {nome : "Bruno"}
let obj2 = {nome : "Bruno"}

console.log(obj1 === obj2) 

// == faz comparção rasa por exemplo 1 == "1" é true 
// === faz comparação a nivel de tipo de dado por exemplo 1 === "1" é false
