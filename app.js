alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 5000 + 1);
// let chute = prompt("Escolha um número entre 1 e 30"); (tiramos pra colocar o while)
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e " + numeroMaximo);
    if (numeroSecreto == chute) {
        break;
    } else {
    if (numeroSecreto > chute) {
        alert("O número secreto é maior que " + chute);
    } else {
        alert("O número secreto é menor que  " + chute);
    }
    // tentativas = tentativas + 1;
    tentativas++;
    }
}
// uma outra maneira de escrever sem if e else:
// let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
// alert("ACERTOU! Muito bem! o número secreto é " + numeroSecreto + " e você acertou com " + tentativas + palavraTentativa);
// (se tiver mais de uma tentativa = "tentativas". se não, "tentativa".)
if (tentativas > 1) {
    alert("ACERTOU! Muito bem! o número secreto é " + numeroSecreto + " e você acertou com " + tentativas + " tentativas.");
} else {
    alert("ACERTOU! Muito bem! o número secreto é " + numeroSecreto + " e você acertou com " + tentativas + " tentativa.");
}
