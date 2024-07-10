alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// while
while (chute != numeroSecreto) {
  chute = prompt(`Digite um número entre 1 e ${numeroMaximo} `);

  // if and else
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que o chute ${chute}`);
    } else {
      alert(`O número secreto é maior que o chute ${chute}`);
    }

    tentativas++; //tentativas = tentativas + 1
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; //Operador ternário
alert(
  `Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.	`
);
