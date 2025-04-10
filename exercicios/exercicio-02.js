//1. Crie um programa que declare duas variáveis e exiba o resultado da soma,
//subtração, multiplicação e divisão desses números.

let  vlr1 = 15
let  vlr2 = 20
console.log("soma = ",vlr1 + vlr2)
console.log("subtração =" ,vlr1 - vlr2)
console.log("multiplicação = ",vlr1 * vlr2)
console.log("divisão = " ,vlr1 / vlr2);

//2. Declare duas idades e utilize operadores de comparação para verificar se uma
//pessoa é mais velha que a outra.
let  idd1 = 28
let  idd2 = 56
console.log(idd1 == idd2);

//3. Crie uma variável idade com um número e use o operador ternário para verificar
//se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de
//idade” ou “Menor de idade”.
let idade = 15
let mensagem = idade >= 18? "Maior de idade" : "Menor de idade"
console.log (mensagem);

//4. Crie uma variável com um número e use o operador ternário para verificar se é
//par ou ímpar.
let num = 10;
let resto = num % 2 == 0;
console.log(resto)
