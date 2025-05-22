import readLine from 'readline-sync'
// 1. Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente

 /*let  dia = Number (readLine.question('Informe o dia da semana: '));
switch (dia) {
    case 1:
    console.log('Domingo')
    break
    case 2:
    console.log('Segunda - feira')
    break
    case 3:
    console.log('Terça - feira')
    break
    case 4:
    console.log('Quarta - feira')
    break
    case 5:
    console.log('Quinta - feira')
    break
    case 6:
    console.log('Sexta - feira')
    break
    case 7:
    console.log('Sábado')
    break

default:
    console.log("Valor inválido, insira um valor correto de 1 a 7")
   break; 
};


let  mes = Number (readLine.question('Informe o número do mês : '));
switch (mes) {
    case 1:
    console.log('Janeiro')
    break
    case 2:
    console.log('Fevereiro')
    break
    case 3:
    console.log('Março')
    break
    case 4:
    console.log('Abril')
    break
    case 5:
    console.log('Maio')
    break
    case 6:
    console.log('Junho')
    break
    case 7:
    console.log('Julho')
    break
    case 8:
    console.log('Agosto')
    break
    case 9:
    console.log('Setembro')
    break
    case 10:
    console.log('Outobro')
    break
    case 11:SS
    console.log('Novembro')
    break
    case 12:
    console.log('Dezembro')
    break

default:
    console.log("Valor inválido, insira um valor correto de 1 a 12")
   break; 
};


let x = readLine.question('Informe o primeiro valor: ')
let y = readLine.question('Informe o segundo valor: ')
let op = Number (readLine.question('Escolha a opção: \n [1] Soma \n [2] Subtração \n [3] Multiplicaçaõ  \n [4] Divisaõ \n '))

switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case 2:
        console.log(`${x} -  ${y} = ${x + y}`);
        break;
    case 3:
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break;
    
    default:
    console.log("Opçaõ inválida!")
    break;
    
}
    */
   
let salario = readLine.questionFloat("Informe seu salário: ")
let cat = readLine.question(" Informe a categoria de bonificaçaõ: ").toUpperCase();
let bonus = 0 

switch (cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`Novo salário ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: BRL})}`)
        break;
    case 'B':
        bonus = salario * 0.10;
        console.log(`Novo salário ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: BRL})}`)
        break;
    case 'C':
        bonus = salario * 0.15;
        console.log(`Novo salário ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: BRL})}`)
        break;
    case 'D':
        bonus = salario * 0.20;
        console.log(`Novo salário ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: BRL})}`)
        break;
    
    default:
        console.log("Categoria inválida!")
        break;
}

