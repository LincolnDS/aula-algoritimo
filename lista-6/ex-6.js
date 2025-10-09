const input = require('readline-sync'); 

let totalAlunos = Number(input.question('Quantos alunos serao avaliados? '));
console.log('--- Calculo de Medias ---');
let alunoAtual = 1;
while (alunoAtual <= totalAlunos) {
    console.log('--- Aluno ' + alunoAtual + ' ---');
    let nota1 = Number(input.question('   Digite a 1a nota: '));
    let nota2 = Number(input.question('   Digite a 2a nota: '));
    let nota3 = Number(input.question('   Digite a 3a nota: '));
    let media = (nota1 + nota2 + nota3) / 3;
    console.log('   MEDIA: ' + media); 
    if (media >= 7) {
        console.log('   SITUACAO: APROVADO');
    } else {
        console.log('   SITUACAO: REPROVADO');
    }
    alunoAtual++;
}