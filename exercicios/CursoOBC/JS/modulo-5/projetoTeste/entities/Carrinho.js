class Carrinho {
    constructor() {
        this.produtos = []
        this.total = 0
    }

    adicionarProduto(produto, qtd = 1) { //instância de Produto
        const itemExistente = this.produtos.find(item => item === produto)
        if (itemExistente) {
            this.total += itemExistente.preco * qtd
        } else {
            this.produtos.push(produto)
            this.total += produto.preco * qtd
        }
    }

    removerProduto(produto) { //instância de Produto
        const i = this.produtos.findIndex(p => p === produto)
        if (i !== -1) {
            const item = this.produtos[i];
            this.produtos.splice(i, 1)
            this.total -= item.preco
            console.log("Produto removido com sucesso!");
        } else {
            console.log("Produto não encontrado");
        }
    }

    visualizarCarrinho() {
        return this.produtos.map(item => ({
            nome: item.nome,
            preco: item.preco,
            categoria: item.categoria,
            "Em estoque": item.estoqueAtual
        }));
    }

    finalizarCompra() {
        for (let i = 0; i < this.produtos.length; i++) {
            const element = this.produtos[i]
            console.log(element.estoqueAtual);
            if (element.estoqueAtual > 0) {
                console.log("Tentando Remover");
                element.removerDoEstoque(1)
            } else {
                return false
            }
        }
        
        const valorDaCompra = this.total
        // Limpar o carrinho
        this.produtos = [];
        this.total = 0;

        console.log(`Compra finalizada com sucesso! Total: R$${valorDaCompra.toFixed(2)}`);
        return true;
    }
}


module.exports = Carrinho