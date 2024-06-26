
const botao = document.getElementById("botaoAdicionar");
const botaoGerar = document.getElementById("botaoGerar");
const mensagem = document.getElementById("mensagemCarrinho");
const paragrafoNumero = document.getElementById("randomNumber");
botao.addEventListener("click", function () {
  mensagem.style.display = "block";
  setTimeout(function () {
    mensagem.style.display = "none";
  }, 5 * 1000);
});

let numerosAleatorios = [];
let numeroGerados = 1;
let intervaloID;

function gerarNumeros(quantidade = 10) {
  const value = (Math.random() * 999).toFixed(3);
  let valueString = value.toString();
  while (valueString.length < 6) {
    valueString = "0" + valueString;
  }
  const valueWithZeros = valueString;
  numerosAleatorios.push(valueWithZeros);
  paragrafoNumero.innerText = `Número ${numeroGerados} de ${quantidade} gerado!`;
  console.log(numerosAleatorios);

  if (numeroGerados >= quantidade) {
    clearInterval(intervaloID);
    console.log(`Quantidade de números gerados: ${numeroGerados}`);
    return;
  }
  numeroGerados++;
}


botaoGerar.addEventListener("click",()=>{
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

(async () => {
  await temporizador(3000);
  console.log("Alerta 1!");

  await temporizador(5000);
  console.log("Alerta 2!");

  await temporizador(7000);
  console.log("Alerta 3!");
})();
