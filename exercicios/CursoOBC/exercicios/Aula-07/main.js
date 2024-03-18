// Função para exibir a mensagem
function mostrarMensagemCarrinho() {
  const mensagem = document.getElementById("mensagemCarrinho"); // Pega o elemento da mensagem
  mensagem.style.display = "block"; // Exibe a mensagem

  // Apaga a mensagem após 5 segundos
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 5000);
}

// Adiciona o evento click ao botão
const botaoAdicionar = document.getElementById("botaoAdicionar");
botaoAdicionar.addEventListener("click", mostrarMensagemCarrinho);
