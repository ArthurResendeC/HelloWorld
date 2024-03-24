import { Random } from "random-js";

const botao = document.getElementById("botaoAdicionar");
const botaoGerar = document.getElementById("botaoGerar");
const mensagem = document.getElementById("mensagemCarrinho");
const paragrafoNumero = document.getElementById("randomNumber");
const random = new Random();

botao.addEventListener("click", function () {
  mensagem.style.display = "block";
  setTimeout(function () {
    mensagem.style.display = "none";
  }, 5 * 1000);
});

let numerosAleatorios = [];
let numeroGerados = 1;

function gerarNumeros(quantidade = 10) {
  const value = random.integer(1, 999999);
  let valueString = value.toString();
  while (valueString.length < 6) {
    valueString = "0" + valueString;
  }
  const valueWithZeros = valueString;
  numerosAleatorios.push(valueWithZeros);
  paragrafoNumero.innerText = `Número ${numeroGerados} de ${quantidade}: ${valueWithZeros}`;
  console.log(numerosAleatorios);

  if (numeroGerados >= quantidade) {
    clearInterval(intervaloID);
    console.log(`Quantidade de números gerados: ${numeroGerados}`);
    return;
  }
  numeroGerados++;
}

let intervaloID;

botaoGerar.addEventListener("click", function () {
  gerarNumeros();
  clearInterval(intervaloID);
  intervaloID = setInterval(gerarNumeros, 3 * 1000);
});

async function temporizador(tempoEmMilisegundos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, tempoEmMilisegundos);
  });
}

(async function () {
  await temporizador(3000);
  console.log("Alerta 1!");

  await temporizador(5000);
  console.log("Alerta 2!");

  await temporizador(7000);
  console.log("Alerta 3!");
})();
