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
    const warning = window.confirm(`Você leu isso tudo, bro?`)
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
    titleInput.value = "";
    readProgress.value= "";
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

  console.log(livros);
  exibirLivros(livros);
}

function exibirLivros(livro){
  booksList.innerHTML=""
  livro.forEach((livro) => {
    const listItem = document.createElement("li")
    listItem.innerHTML = `<article> <h3>${livro.nome}</h3> <p>${livro.progresso}</p><button class="botaoExcluir" data-id="${livro.id}">Excluir</button> </article> <hr>`
    booksList.appendChild(listItem)
  });
}

async function excluirLivros(id){
  const resposta = await fetch(`http://localhost:3000/livros/`,{
    method:"DELETE",
  })
}