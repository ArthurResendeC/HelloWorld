const paragrafo = document.getElementById("paragrafo");
const buttonText = document.getElementById("btext");
const botao = document.getElementById("btn");

let textoOriginal = paragrafo.textContent;
let textoAlternativo = "E esse já é outro parágrafo!";

let textoAtual = textoOriginal;

botao.addEventListener("click", function () {
    if (textoAtual === textoOriginal) {
    paragrafo.textContent = textoAlternativo;
    buttonText.textContent = "Retornar ao original";
    textoAtual = textoAlternativo;
} else {
    paragrafo.textContent = textoOriginal;
    buttonText.textContent = "Alternar texto";
    textoAtual = textoOriginal;
    }
});

const botao2 = document.getElementById('btn2');
const numero = document.getElementById('number');

let contador = 0;
const limite = 99;

botao2.addEventListener("click", function(){
    if (contador < limite) {
    contador++;
    numero.innerText = contador;
    } else {
    alert('Para de clicar no contador, seu nóia!');
}
});

function toKebabCase(str){
    return str.split(" ").join("-").toLowerCase()
}

const lista = document.getElementById("listaDeFilmes");

function adicionarFilme(filme){
    const item = document.createElement("li");
    item.id = toKebabCase(filme.nome);
    item.textContent = `Nome: ${filme.nome} | Ano de lançamento: ${filme.ano} | Gênero: ${filme.genero}`
    const btnRemover = document.createElement("button")
    btnRemover.innerText = "Remover filme"
    btnRemover.addEventListener("click", function(){
        const itemParaRemover = document.getElementById(item.id)
        itemParaRemover.remove();

        item.appendChild(btnRemover)
    })

    document.getElementById("listaDeFilmes").appendChild(item)
    document.getElementById("listaDeFilmes").appendChild(btnRemover)
}

const filme = {}
const form = document.getElementById("cadastrarFilme")
form.addEventListener("submit", function(event) {
    event.preventDefault()

    const inputNome = document.getElementById("ifilme")
    const inputAno = document.getElementById("iano")
    const inputGenero = document.getElementById("igenero")

    filme.nome = inputNome.value;
    filme.ano = inputAno.value;
    filme.genero = inputGenero.value;

    adicionarFilme(filme);

    event.target.reset();
})


