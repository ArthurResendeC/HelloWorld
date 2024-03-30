const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const readProgress = (document.getElementById("readProgress"));
const booksList = document.getElementById("booksList");
carregarLivros();
bookForm.addEventListener("submit", (event)=>{
  event.preventDefault()
  const nome = titleInput.value;
  const progresso = readProgress.value;
  if(progresso >= 1000){
    const warning = window.confirm(`Tem certeza que você leu ${progresso} páginas?`)
    if(warning){
      console.log("Adicionando livro...");
      adicionarLivro(nome,progresso)
      titleInput.value = "";
      readProgress.value= "";
    } else{
      alert("Ação cancelada e livro não adicionado!");
    }
    return
  } else{
    alert(`Adicionando "${nome}"...`)
    adicionarLivro(nome,progresso);
    event.target.reset()
  }
})
async function adicionarLivro(nome,progresso){
  const resposta = await fetch("http://localhost:3000/livros", {
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nome,progresso})
  })
  if(!resposta.ok){
    console.info(`A requisição solicitada tem algum erro! ${resposta.status} - ${resposta.statusText}`);
  } else{
    carregarLivros();
  }
}
async function carregarLivros(){
  const resposta = await fetch("http://localhost:3000/livros")
  const livros = await resposta.json()
  exibirLivros(livros);
}
function exibirLivros(livro){
  booksList.innerHTML=""
  livro.forEach((livro) => {
    const title = document.createElement("h3")
    title.dataset.id = livro.id;
    title.innerHTML = `${livro.nome}`
    const pages = document.createElement("p")
    pages.innerHTML = `${livro.progresso} páginas lidas`
    const btnDel = document.createElement("button");
    btnDel.textContent = "Excluir"
    btnDel.className = "botaoExcluir"
    btnDel.addEventListener("click", ()=> {
      excluirLivro(livro.id)
    })
    booksList.appendChild(title)
    booksList.appendChild(pages)
    booksList.appendChild(btnDel)
  });

  return booksList
}

async function excluirLivro(id) {
  console.log(id);
  await fetch(`http://localhost:3000/livros/${id}`,{method:"DELETE"})
  carregarLivros()
}