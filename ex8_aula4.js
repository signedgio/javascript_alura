// Crie uma variável "numero" e peça um valor com prompt
// verifique se é positivo, negativo ou zero. Use if-else para imprimir a
// respectiva mensagem.

let numero = prompt("Digite um número:");
if (numero == 0) {
    alert("O número é igual a zero.");
} else if (numero > 0) {
    alert("O número é positivo.");
} else {
    alert("O número é negativo.");
}