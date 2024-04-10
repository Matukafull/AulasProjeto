alert('Bem vindo ao jogo do núuuuumero secreto!!');
// espaço de declaração de váriáveis
let numeroSecreto = parseInt(Math.random()*num + 1);
let num = 80;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto não houver acertos
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 e ${num}`)
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`Puts, o número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        // Números de tentativas
        tentativas++;
    }
} let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 

alert (`Isso aí. Você acertou o número ${numeroSecreto} com ${tentativas} ${PalavraTentativa}`);






