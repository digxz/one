let listasDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto!");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 100!");
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns, você acertou!");
    let palavraTentativas = tentativas == 1 ? "tentativa" : "tentativas";
    let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativas}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("p", "O número secreto é menor!");
  } else {
    exibirTextoNaTela("p", "O número secreto é maior!");
  }
  tentativas++;
  limparCampo();
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listasDeNumerosSorteados = [];
  }

  if (listasDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listasDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
