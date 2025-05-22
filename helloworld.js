//oi
//olá
console.log("Hello, World");

let valor = 10
let outrovalor = valor // passagem como valor -> passa uma cópia do valor
console.log("Valor: " + valor)
console.log("Outro valor:" + outrovalor)
outrovalor = 15
console.log("Valor:" + valor)
console.log("Outro valor: " + outrovalor);

let carro = {
    cor : "Azul"
}

let bicicleta = carro 

console.log ("Carro: " + carro.cor)
console.log ("Bicicleta: " + bicicleta.cor)

bicicleta.cor = "Verde"
console.log("Carro: " + carro.cor)
console.log("Bicicleta: " + bicicleta.cor)

//import entrardados from 'readline-sync';
//let nome = entrardados.question('Informe seu nome: ');
//console.log(`Olá, ${nome}!`)
