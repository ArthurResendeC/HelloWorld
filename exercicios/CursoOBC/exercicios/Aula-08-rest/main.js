// async function executar(){
//     const dados = await fetch("http://localhost:3000/tarefas").then(resposta => resposta.json())
//     console.log(dados);
// }

// executar()

const postForm = document.getElementById("postForm")
const titleInput = document.getElementById("title")
const bodyInput = document.getElementById("body")
const postsList = document.getElementById("postsList")

carregarPosts()

postForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    const title = titleInput.value;
    const body = bodyInput.value;

    criarPost(title, body)

    titleInput.value = "";
    bodyInput.value = "";
})

async function criarPost(title,body){
    const resposta = await fetch("http://localhost:3000/posts",{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({title,body})
})
    if(!resposta.ok){
        console.info(`A requisição está incorreta! ${resposta.status} - ${resposta.statusText}`);
    } else{
        carregarPosts();
    }
}

async function carregarPosts(){
    const resposta = await fetch("http://localhost:3000/posts")
    const posts = await resposta.json()

    console.log(posts);
    exibirPosts(posts);
}

function exibirPosts(posts){
    postsList.innerHTML = ""
    posts.forEach((post) =>{
        const listItem = document.createElement("li")
        listItem.innerHTML = `<article> <h3>${post.title}</h3> <p>${post.body}</p> </article> <hr>`
        postsList.appendChild(listItem)
    })
}
