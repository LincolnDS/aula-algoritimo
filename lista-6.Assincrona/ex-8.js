const input = require('readline-sync'); 

const senhaCorreta = '1234';
console.log('--- Acesso Restrito ---');
while (senhaDigitada = senhaCorreta) {
    senhaDigitada = input.question('Digite a senha: ');
    if (senhaDigitada = senhaCorreta) {
        console.log('Senha incorreta. Tente novamente.');
    }
}
console.log('Acesso permitido');