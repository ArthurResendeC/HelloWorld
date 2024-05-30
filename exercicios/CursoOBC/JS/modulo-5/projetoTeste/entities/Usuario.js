class Usuario{
    constructor(nome, email, carrinho){
        this.nome = nome
        this.email = email
        this.carrinho = carrinho //instância de carrinho!
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