let numero = parseInt(prompt("Digite um número de 1 a 10 e descubra sua tabuada de multiplicação"));
let texto = ""

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    texto += `${numero} * ${i} = ${resultado}\n`
}
alert(texto)



























let num = parseInt(prompt(`Escolha outro número inteiro e descubra o fatorial dele`));
let resultadoFatorial = 1;
for(let i = 1 ; i <=num; i++) {
    resultadoFatorial *= i;
}
alert(`O fatorial de ${num} é ${resultadoFatorial}!`)
console(`O fatorial de ${num} é ${resultadoFatorial}!`)
























// Função para calcular a média das notas
function calcularMedia(notas) {
    let somaNotas = 0;
    let quantidadeNotas = 0;

    for (const nota of notas) {
    if (nota === -1) {
        break;
    }
    somaNotas += nota;
    quantidadeNotas++;
    }

    if (quantidadeNotas === 0) {
    return "Nenhuma nota foi inserida.";
    }

    return somaNotas / quantidadeNotas;
}

  // Solicitar notas ao usuário
let notas = [];
let nota = 0;

while (nota !== -1) {
    nota = parseFloat(prompt("Digite a nota do aluno (ou -1 para finalizar): "));
    notas.push(nota);
}

  // Calcular e exibir a média das notas
const media = calcularMedia(notas);
if (typeof media === "string") {
    alert(media);
} else {
    alert(`A média das notas é: ${media.toFixed(2)}`);}


