const Carrinho = require("./entities/Carrinho")
const Produto = require("./entities/Produto")
const Usuario = require("./entities/Usuario")

class Loja{
    constructor(){
        this.produtos = []
        this.usuarios = []
    }

    adicionarProduto(produto){ //instância de Produto
        this.produtos.push(produto)
        return `Produto adicionado com sucesso!`
    }   

    removerProduto(produto){ //instância de Produto
        this.produtos.splice(this.produtos.find(p=>p === produto))
        return `Produto removido com sucesso!`
    }

    listarProdutos(){
        return this.produtos
    }

    buscarProdutoPorCategoria(categoria){
        const produtosFiltrados = this.produtos.filter(produto=> produto.categoria === categoria)
        if (produtosFiltrados.length > 0) {
            return `Os produtos filtrados por ${categoria} são:\n${produtosFiltrados}`
        } else{
            return `Não existem resultados para o filtro: ${categoria}!`
        }
    }

    autenticarUsuario(usuario){
        return this.usuarios.find(user=> user.email === usuario.email)
    }

    registrarUsuario(usuario){ //instância de Usuario
        if (this.autenticarUsuario(usuario)) {
            return `Um usuário com esse endereço de email já existe!`
        } else {
            this.usuarios.push(usuario)
            return `Usuário registrado com sucesso!`
        }
    }
}
module.exports = Loja


const carrinhoUsuario = new Carrinho()
const usuario = new Usuario("João", "joao@email.com", carrinhoUsuario)

const produto1 = new Produto("PS5", 2200, "Console")
const produto2 = new Produto("Xbox Series S", 3000, "Console")
produto1.adicionarAoEstoque(5)
produto2.adicionarAoEstoque(5)
usuario.adicionarAoCarrinho(produto1)
usuario.adicionarAoCarrinho(produto2)
usuario.adicionarAoCarrinho(produto1)
console.log(usuario.visualizarCarrinho());
usuario.removerDoCarrinho(produto2)

console.log(usuario.visualizarCarrinho())
// usuario.finalizarCompra()
console.log(produto1.estoqueAtual, produto2.estoqueAtual);
