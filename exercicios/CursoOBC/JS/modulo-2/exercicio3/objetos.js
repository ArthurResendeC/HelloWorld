let imoveis = []
mostrarMenu()

function mostrarMenu() {
    let menu = "===== Corretora de Imóveis =====\n";
    menu += "1. Novo imóvel\n";
    menu += "2. Remover imóvel\n";
    menu += "3. Mostrar todos os imóveis salvos\n";
    menu += "4. Sair\n";
    menu += "===============================\n";
    
    const opcao = parseInt(prompt(menu));

    switch(opcao) {
        case 1:
            novoImovel();
            break;
        case 2:
            removerImovel();
            break;
        case 3:
            mostrarImoveis();
            break;
        case 4:
            alert("Saindo do programa.");
            return;
        default:
            alert("Opção inválida. Por favor, escolha novamente.");
            break;
    }

    mostrarMenu();
}

function novoImovel() {
    let novoImovel = {} 
    const nomeImovel = prompt("Qual o nome do imóvel?")
    const qtdQuartos = prompt("Qual a quantidade de quartos do imóvel?")
    const qtdBanheiros = prompt("Qual a quantidade de banheiros do imóvel?")
    const temGaragem = confirm("Tem garagem? (confirme se possui/ cancele se não possuir)")

    novoImovel.nome = nomeImovel
    novoImovel.qtdQuartos = qtdQuartos
    novoImovel.qtdBanheiros = qtdBanheiros
    if (temGaragem) {
        novoImovel.garagem = "Sim"
    } else{
        novoImovel.garagem = "Não"
    }
    imoveis.push(novoImovel)
}

function mostrarImoveis() {
    for (let i = 0; i < imoveis.length; i++) {
        const element = imoveis[i];
        alert(`Nome do imóvel: ${element.nome}
        Quantidade de quartos: ${element.qtdQuartos}
        Quantidade de banheiros: ${element.qtdBanheiros}
        Tem garagem? ${element.garagem}`)
        console.log(imoveis);
    }
}

function removerImovel() {
    const nomeASerRemovido = prompt("Qual a nome do imóvel?")
    const encontrarImovelASerRemovido = imoveis.find( imovel => imovel.nome === nomeASerRemovido)
    if (encontrarImovelASerRemovido) {
        const imoveisRestantes = imoveis.filter( imovel => imovel.nome !== nomeASerRemovido)
        imoveis = imoveisRestantes
    }
}