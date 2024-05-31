const Produto = require("./entities/Produto")
const Usuario = require("./entities/Usuario")

class Loja{
    #usuarios = []
    #produtos = []
    
    adicionarProduto(nome, preco, categoria, qtdEstoque){
        const produto = new Produto(nome, preco, categoria, qtdEstoque)
        this.#produtos.push(produto)
        return produto
    }   

    removerProduto(produto){ //instância de Produto
        const produtoEncontrado = this.#produtos.findIndex(p => p === produto)
        if (produtoEncontrado) {
            this.#produtos.splice(produtoEncontrado, 1)
            return `${produto.nome} removido com sucesso!`
        } else {
            return `${produto.nome} não foi encontrado`
        }
    }

    listarProdutosDisponiveis(){
        console.log(this.#produtos)
    }

    listarUsuarios(){
        console.log(this.#usuarios)
    }

    buscarProdutoPorCategoria(categoria){
        const produtosFiltrados = this.#produtos.filter( p=> p.categoria === categoria)
        if (produtosFiltrados.length > 0) {
            produtosFiltrados.forEach(produto => console.log(produto))
        } else{
            console.log(`Não existem resultados para o filtro: ${categoria}!`);
        }
    }

    autenticarUsuario(email){
        return this.#usuarios.some(user => user.email === email)
    }

    registrarUsuario(nome, email){ 
        if (this.autenticarUsuario(email)) {
            console.log(`Um usuário com esse endereço de email já existe!`)
            return null
        } else {
            const usuarioCriado = new Usuario(nome, email)
            this.#usuarios.push(usuarioCriado)
            console.log(`Usuário registrado com sucesso!`)
            return usuarioCriado
        }
    }
}

const loja = new Loja()

const user1 = loja.registrarUsuario("Dauan Ciniz", "dauan@email.com")
const user2 = loja.registrarUsuario("John Doe", "doejohn@email.com")

const produto1 = loja.adicionarProduto("PS4", 2400, "Video-game", 3)
const produto2 = loja.adicionarProduto("PS5", 3700, "Video-game", 3)
loja.listarProdutosDisponiveis()
produto2.detalhesProduto()

user1.carrinho.adicionarProduto(produto1, 1);
user1.carrinho.adicionarProduto(produto1, 1);
user2.carrinho.adicionarProduto(produto2, 1)

user1.carrinho.finalizarCompra()
user2.finalizarCompra()

produto1.detalhesProduto()
produto2.detalhesProduto()
