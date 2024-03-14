function toKebabCase(str){
    return str.split(" ").join("-").toLowerCase()
}

const ulElement = document.getElementById("listaDeJogos");



function adicionarLi(jogo){
    const liElement = document.createElement("li");
    liElement.id = toKebabCase(jogo.nome)
    liElement.textContent = `Nome: ${jogo.nome} | Ano de Lançamento: ${jogo.ano} | Gênero: ${jogo.genero}`
    const btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover jogo"
    btnRemover.addEventListener("click", function(){
        const liParaRemover = document.getElementById(liElement.id)
        liParaRemover.remove()
        
        liElement.appendChild(btnRemover)
    })

    
    document.getElementById("listaDeJogos").appendChild(liElement)
    document.getElementById("listaDeJogos").appendChild(btnRemover)
}

const jogo = {}
const form = document.getElementById("cadastrarJogo")
form.addEventListener("submit", function(evento){
    evento.preventDefault()

    const inputNome = document.getElementById("inome")
    const inputAno = document.getElementById("iano")
    const inputGenero = document.getElementById("igenero")

    
    jogo.nome = inputNome.value;
    jogo.ano = inputAno.value;
    jogo.genero = inputGenero.value;
    
    adicionarLi(jogo);

    evento.target.reset(); 
})


    


