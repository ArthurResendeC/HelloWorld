import { Random } from "random-js";

const botao = document.getElementById("botaoAdicionar");
const botaoGerar = document.getElementById("botaoGerar")
const mensagem = document.getElementById("mensagemCarrinho");
const paragrafoNumero = document.getElementById("randomNumber");
const random = new Random();

botao.addEventListener("click", function(){
  mensagem.style.display = "block"
  setTimeout(function (){
    mensagem.style.display = "none"
  }, 5 * 1000)
})

function gerarNumeros(){
  const value = random.integer(1,999999);
  let valueString = value.toString();
  while (valueString.length < 6) {
  valueString = '0' + valueString;
  }
  const valueWithZeros = valueString;
  paragrafoNumero.innerText = `Número aleatório: ${valueWithZeros}`
}

let intervaloID;

botaoGerar.addEventListener("click", function(){
  gerarNumeros()
  clearInterval(intervaloID)
  intervaloID = setInterval(gerarNumeros, 10 * 1000);
})

async function temporizador(tempoEmMilisegundos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, tempoEmMilisegundos);
  });
}

(async function() {
  await temporizador(3000);
  console.log("Alerta 1!");

  await temporizador(5000);   
  console.log("Alerta 2!");

  await temporizador(7000); 
  console.log("Alerta 3!");
})();
