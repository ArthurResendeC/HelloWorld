class Produto {
    #estoque = 0
    constructor(nome, preco, categoria){
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }

    adicionarAoEstoque(value){
        this.#estoque += value
    }

    removerDoEstoque(value){
        if (this.#estoque >= value) {
            this.#estoque -= value
            return `Quantidade removida do estoque do item ${this.nome}`
        } else{
            return `Estoque insuficiente para o item ${this.nome}`
        }
    }

    get estoqueAtual(){
        return this.#estoque
    }

    detalhesProduto(){ //recebe uma instância de Produto
        return `Identificação: ${this.nome}\nPreço: ${this.preco}\nCategoria: ${this.categoria}`
    }

}

module.exports = Produto