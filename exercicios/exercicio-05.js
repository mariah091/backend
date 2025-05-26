import rl from 'readline-sync';

//01

let num = rl.question("Informe o número para gerar a tabuada: ");
let cont = 1 
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;

}

//02
let numAlunos = rl.questionInt("Informe o número de alunos da turma: ");

let contAlunos = 1;
let somaMedias = 0;

while (contAlunos <= numAlunos){
    console.log(`Aluno ${contAlunos}`);

    let contBimestres = 1;
    let somaNotas = 0;
    while(contBimestres <= 4){
        let nota = rl.questionInt(`Informe a nota do ${contBimestres}º bimestre do aluno ${contAlunos}: `);
        somaNotas += nota;
        contBimestres++;
    }

    let mediaAluno = somaNotas / 4;
    somaMedias+= mediaAluno;
    console.log(` Média do Aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
    contAlunos++;

}
let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Média Geral da Turma: ${mediaGeralTurma.toFixed(2)} `);

//3
const numeroAleatorio = Math.floor(Math.random()*100)+1;
let palpite;

do {
    palpite = rl.questionInt("Tente adivinhar o número (entre 1 e 100): ");
    if  (palpite == numeroAleatorio){
        console.log ("Parabens! Você adivinhou o número.") }
    else if (palpite < numeroAleatorio) {
        console.log("Tente um número maior ") }
        else {
            console.log("Tente número menor. ")}
        
    
    } while (palpite !==numeroAleatorio);


//04 
for (let i = 1; i <= 10; 1++){
    let nome = rl.question(`Informe o nome da ${i}º pessoa: `)
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `)
    let impostoRenda = 0 

    if (salario <= 2000){
        impostoRenda = salario * 0.075}
    else if (salario <= 3700){
        impostoRenda = salario * 0.015}
     else if (salario <= 4660){
        impostoRenda = salario * 0.225}
    else{ 
        impostoRenda = salario * 0.275;}
    console.log(`Imposto de renda a ser pago`)
    console.log(`Nome:${nome} \nImposto de Renda: ${impostoRenda.toFixed(2)}\n`)
    
                    



}
