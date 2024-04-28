const form = document.getElementById("formulary")
const list = document.getElementById("printer")
const productInput = document.getElementById("product")
const productAmount = document.getElementById("amount")

carregarItens()

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const produto = productInput.value
    const quantidade = productAmount.value

    criarItem(produto,quantidade)

    productInput.value = ""
    productAmount.value = ""
})

async function criarItem(produto,quantidade) {
    const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application.json"
        },
        body: JSON.stringify({produto,quantidade})
    })
    carregarItens()
}

async function carregarItens(){
    const response = await fetch("http://localhost:3000/products")
    const items = await response.json()

    console.log(items);
    exibirItens(items);
}

function exibirItens(items){
    list.innerHTML = ""
    items.forEach((item) => {
        const listItem = document.createElement("li")
        listItem.innerHTML = `<article><h3>${item.produto}</h3><p>Quantidade: ${item.quantidade}</p></article><hr>`
        list.appendChild(listItem)
    })
}