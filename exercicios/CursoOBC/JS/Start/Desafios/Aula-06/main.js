function toKebabCase(str){
  return str.split(" ").join("-").toLowerCase()
}

document.getElementById("adicionarJogo").addEventListener("click", function(){
  const jogo = prompt(`Insira o nome do jogo que você deseja adicionar à lista:`)

  const liElement = document.createElement("li")
  liElement.innerText = jogo
  liElement.id = toKebabCase(jogo)

  const btnRemover = document.createElement("button")
  btnRemover.innerText = "Remover jogo"
  btnRemover.addEventListener("click", function(){
    const liParaRemover = document.getElementById(toKebabCase(jogo))
    liParaRemover.remove()
  })

  liElement.appendChild(btnRemover)

  const ulElement = document.getElementById("listaDeJogos");
  
  ulElement.appendChild(liElement);
})

