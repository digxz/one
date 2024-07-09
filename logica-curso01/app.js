alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
let chute;
let tentativas = 1;

// while
while (chute != numeroSecreto) {
  chute = prompt("Digite um número entre 0 e 10");

  // if and else
  if (chute == numeroSecreto) {
    alert(
      `Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`
    );
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que o chute ${chute}`);
    } else {
      alert(`O número secreto é maior que o chute ${chute}`);
    }
    tentativas++; //tentativas = tentativas + 1
  }
}
