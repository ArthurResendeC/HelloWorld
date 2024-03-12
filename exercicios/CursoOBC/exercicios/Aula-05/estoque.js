let produtos = []

const produto1 = {
    nome: "",
    quantidade: 0,
}
    

exibirMenu()

function exibirMenu(){
    const opcaoEscolhida = prompt(
        `Escolha uma das opções abaixo:
        1. Cadastrar novos itens. 
        2. Listar os itens cadastrados. 
        3. Alterar a quantidade dos itens cadastrados. 
        4. Excluir um item cadastrado.
        5. Sair.`
    )

    if(!isNaN(opcaoEscolhida)){
        const opcao = parseInt(opcaoEscolhida);
        switch (opcao) {
            case 1: adicionarProdutos();
            break;
            case 2: listarProdutos();
            break;
            case 3: alterarQtdProdutos();
            break;
            case 4: excluirItem();
            break;
            case 5: sairDoMenu();
            break
            default:
                alert(`Opção inválida!`);
                exibirMenu()
            }
        } else{
            alert(`Você deve digitar um número!`)
            exibirMenu()
    }
}

function sairDoMenu(){
    alert(`Saindo...`)
}

function adicionarProdutos(){
    let nome = prompt(`Digite o nome do produto:`);
    let quantidade = parseInt(prompt(`Digite a quantidade do produto:`));

    if(!nome || !quantidade){
        alert(`Nome e quantidade são obrigatórios!`);
        exibirMenu();
        return;
    }
    const novoProduto = {
        nome,
        quantidade: parseInt(quantidade),
    }

    produtos.push(novoProduto);

    alert(`O produto "${nome}" foi adicionado com sucesso!`)
    exibirMenu()
}

const listaDeProdutos = [];

function listarProdutos() {
    const listaDeProdutos = produtos ?? [];

    if (listaDeProdutos.length === 0) {
    alert("Nenhum produto cadastrado!");
    } else {
    const mensagem = listaDeProdutos.map((produto) => {
        return `Nome: ${produto.nome}\nQuantidade: ${produto.quantidade}`;
    }).join("\n\n");

    alert(mensagem);
    }

    exibirMenu();
}

