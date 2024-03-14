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
            case 4: removerItem();
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

function listarProdutos() {
    const listaDeProdutos = produtos ?? [];

    if (listaDeProdutos.length === 0) {
    alert("Nenhum produto cadastrado!");
    } else {
    const mensagem = listaDeProdutos.map((produto) => {
        return `Nome: ${produto.nome}\nQntd: ${produto.quantidade}`;
    }).join("\n\n");

    alert(`Lista de produtos:\n\n` + mensagem);
    }

    exibirMenu();
}

function alterarQtdProdutos(){
    const nomeDoProduto = prompt(`Digite o nome do produto o qual você deseja alterar a quantidade:`)

    let produtoEncontrado = null;
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].nome === nomeDoProduto){
            produtoEncontrado = produtos[i];
        }
    }

    if(!produtoEncontrado){
        alert(`O produto ${nomeDoProduto} não foi encontrado!`);
        return
    }

    let novaQuantidade = parseInt(prompt(`Digite a nova quantidade para o "${nomeDoProduto}":`));
    if(isNaN(novaQuantidade)){
        alert(`A quantidade deve ser um número!`)
    } else{

    produtoEncontrado.quantidade = novaQuantidade;
    alert(`A quantidade do produto "${nomeDoProduto}" foi alterada para ${novaQuantidade} com sucesso!`)
    listarProdutos();
    exibirMenu();
    }
}

function removerItem() {
    const nomeDoProduto = prompt("Digite o nome do produto que você deseja remover: ");

    let indiceDoProduto = -1;

    // Encontrar o índice do item a ser removido
    for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nomeDoProduto) {
        indiceDoProduto = i;
        break;
    }
}

    // Remover o item da lista
    if (indiceDoProduto > 0) {
    produtos.splice(indiceDoProduto, 1);
    alert(`O produto "${nomeDoProduto}" foi removido com sucesso!`);
    } else {
    alert(`O produto "${nomeDoProduto}" não foi encontrado!`);
    }
    listarProdutos();
    exibirMenu();
}


