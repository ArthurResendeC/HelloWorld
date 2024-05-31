class Produto {
    constructor(nome, preco, categoria, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.estoque = estoque;
        this.id = Math.floor(Math.random() * 9999);
    }

    adicionarAoEstoque(value) {
        this.estoque += value;
    }

    removerDoEstoque(value) {
        if (this.estoque >= value) {
            this.estoque -= value;
            return true; // Retorna verdadeiro se a remoção foi bem-sucedida
        } else {
            return false; // Retorna falso se não há estoque suficiente
        }
    }

    detalhesProduto() {
        console.log(`Identificação: ${this.nome}\nPreço: ${this.preco}\nCategoria: ${this.categoria}\nID: ${this.id}\nEm estoque: ${this.estoque}\n`);
    }
}

module.exports = Produto;
