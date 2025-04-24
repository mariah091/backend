//1. Crie um programa que declare duas variáveis e exiba o resultado da soma,
//subtração, multiplicação e divisão desses números.

let  vlr1 = 15
let  vlr2 = 20
//console.log("soma = ",vlr1 + vlr2)
//console.log("subtração =" ,vlr1 - vlr2)
//console.log("multiplicação = ",vlr1 * vlr2)
//console.log("divisão = " ,vlr1 / vlr2);
let soma = vlr1 + vlr2
let subtração = vlr1 - vlr2
let multiplicação = vlr1 * vlr2
let divisão = vlr1 / vlr2
console.log(`
    ${vlr1} + ${vlr2} = ${soma}
    ${vlr1} - ${vlr2} = ${subtração}
    ${vlr1} * ${vlr2} = ${multiplicação}
    ${vlr1} / ${vlr2} = ${divisão} `);
    
//2. Declare duas idades e utilize operadores de comparação para verificar se uma
//pessoa é mais velha que a outra.
let  idda1 = 28
let  idda2 = 15
let resultado = idda1 < idda2 ? 'O segundo é mais velho' : 'O primeiro é mais velho'
console.log(resultado);
//3. Crie uma variável idade com um número e use o operador ternário para verificar
//se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de
//idade” ou “Menor de idade”.
let idade = 15
let mensagem = idade >= 18? "Maior de idade" : "Menor de idade"
console.log (mensagem);

//4. Crie uma variável com um número e use o operador ternário para verificar se é
//par ou ímpar.
let num = 10;
let resto = num % 2 == 0 ? "Par" : "Impar"
console.log(resto);
