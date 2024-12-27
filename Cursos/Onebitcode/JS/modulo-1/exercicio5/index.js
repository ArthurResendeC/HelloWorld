let opcaoEscolhida = ""

do {
    opcaoEscolhida = prompt(
        `Escolha uma das opções abaixo:
        1-
        2-
        3-
        4-
        5- Encerrar`
    )
    switch (opcaoEscolhida) {
        case "1":
            alert("Você escolheu a opção 1")
            break;
        case "2":
            alert("Você escolheu a opção 2")
            break
        case "3":
            alert("Você escolheu a opção 3")
            break
        case "4":
            alert("Você escolheu a opção 4")
            break
        case "5":
            alert("Você escolheu encerrar...")
            break
        default:
            alert("Opção invalida, mula!")
            break;
    }
} while (opcaoEscolhida !== "5");