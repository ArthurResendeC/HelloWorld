let opcaoEscolhida = ""
let dinheiroAtual = parseFloat(prompt("Quanto de dinheiro tens?")) 

    do {
        if(dinheiroAtual > 0){
        opcaoEscolhida = prompt(
            `
            Você tem R$${dinheiroAtual},00
            Escolha uma das opções abaixo:
            1- Adicionar dinheiros;
            2- Remover dinheiros;
            3- Encerrar`
        )
    } else {
        alert("Você faliu, mula!")
        break
    }
        switch (opcaoEscolhida) {
            case "1":
                const aSerAdicionado = parseFloat(prompt("Qual a quantidade de dinheiros a ser adicionada?"))
                dinheiroAtual += aSerAdicionado
                break;
            case "2":
                const aSerRemovido = parseFloat(prompt("Qual a quantidade de dinheiros a ser decrescentada?"))
                dinheiroAtual -= aSerRemovido
                break
            case "3":
                alert("Você escolheu sair")
                alert("Encerrando...")
                break
            default:
                alert("Opção invalida, mula!")
                break;
        }
    } while (opcaoEscolhida !== "3");
