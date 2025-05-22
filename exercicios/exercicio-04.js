import readLine from 'readline-sync'
// 1. Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente

let  dia = Number (readLine.question('Informe o dia da semana: '));
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
    case 11:
    console.log('Novembro')
    break
    case 12:
    console.log('Dezembro')
    break

default:
    console.log("Valor inválido, insira um valor correto de 1 a 12")
   break; 
};

