class Carrinho {
    #produtos = [];
    #total = 0;

    adicionarProduto(produto, qtd = 1) {
        const itemExistente = this.#produtos.find(item => item.produto.id === produto.id);
        if (itemExistente) {
            itemExistente.qtd += qtd;
        } else {
            this.#produtos.push({ produto, qtd });
        }
        this.#total += produto.preco * qtd;
        console.log("Produto adicionado com sucesso!");
    }

    removerProduto(produto) {
        const i = this.#produtos.findIndex(p => p.produto.id === produto.id);
        if (i !== -1) {
            const item = this.#produtos[i];
            this.#total -= item.produto.preco * item.qtd;
            this.#produtos.splice(i, 1);
            console.log("Produto removido com sucesso!");
        } else {
            console.log("Produto não encontrado");
        }
    }

    visualizarCarrinho() {
        const itens = this.#produtos.map(item => ({
            nome: item.produto.nome,
            preco: item.produto.preco,
            categoria: item.produto.categoria,
            "Em estoque": item.produto.estoque,
            id: item.produto.id,
            quantidade: item.qtd
        }));
        const total = this.#total;
        console.log({ itens, total: `R$${total},00` });
    }

    finalizarCompra() {
        // Primeira verificação: Verificar se todos os produtos têm estoque suficiente
        for (let i = 0; i < this.#produtos.length; i++) {
            const item = this.#produtos[i];
            const produto = item.produto;
            const qtd = item.qtd;
            if (produto.estoque < qtd) {
                console.log(`Estoque insuficiente para o produto ${produto.nome}`);
                return false;
            }
        }

        // Segunda passagem: Deduzir do estoque após confirmação de que todos têm estoque suficiente
        for (let i = 0; i < this.#produtos.length; i++) {
            const item = this.#produtos[i];
            const produto = item.produto;
            const qtd = item.qtd;
            produto.removerDoEstoque(qtd); // Remover a quantidade do estoque
        }

        const valorDaCompra = this.#total;
        this.#produtos = [];
        this.#total = 0;

        console.log(`Compra finalizada com sucesso! Total: R$${valorDaCompra.toFixed(2)}`);
        return true;
    }
}

module.exports = Carrinho;