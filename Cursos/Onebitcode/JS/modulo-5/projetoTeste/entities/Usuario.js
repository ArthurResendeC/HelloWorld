const Carrinho = require("./Carrinho")

class Usuario{
    constructor(nome, email){
        this.nome = nome
        this.email = email
        this.carrinho = new Carrinho //instancia um carrinho!
    }

    adicionarAoCarrinho(produto, qtd){
        this.carrinho.adicionarProduto(produto, qtd)
    }
 
    removerDoCarrinho(produto){
        this.carrinho.removerProduto(produto)
    }

    visualizarCarrinho(){
        return this.carrinho.visualizarCarrinho()
    }

    finalizarCompra(){
        const tentativa = this.carrinho.finalizarCompra()
        if (tentativa) {
            return
        } else{
            console.log("Falha na finalização da compra!");
        }
    }
}

module.exports = Usuario