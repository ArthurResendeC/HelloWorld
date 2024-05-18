const botaoHtml = document.getElementById("actionBtn")

let vagas = []

function mostrarMenu() {
    let menu = "========= Sistema de vagas de emprego =========\n";
        menu += "1. Vagas disponíveis\n";
        menu += "2. Criar uma nova vaga\n";
        menu += "3. Visualizar uma vaga\n";
        menu += "4. Inscrever candidato\n"
        menu += "5. Excluir uma vaga\n";
        menu += "6. Sair\n"
        menu += "======================================\n";

    const opcao = parseInt(prompt(menu));
    
    switch(opcao) {
        case 1:
            listarVagas();
            break;
        case 2:
            criarNovaVaga();
            break;
        case 3:
            visualizarVaga();
            break;
        case 4:
            inscreverCandidato()
            break
        case 5:
            excluirVaga()
            break
        case 6:
            alert("Saindo do programa.");
            return;
        default:
            alert("Opção inválida. Por favor, escolha novamente.");
            break;
    }

    mostrarMenu();
}

function criarNovaVaga(){
    let novaVaga = {}

    const identificacao = prompt("Qual a identificação da vaga?")
    const descricao = prompt("Qual a descrição da vaga?")
    const dataLimite = prompt("Qual a data limite para essa vaga ser preenchida? (mm/dd/aaaa)")
    let candidatosAVaga = []

    novaVaga.identificacao = identificacao
    novaVaga.descricao = descricao
    novaVaga.dataLimite = dataLimite
    novaVaga.candidatosAVaga = candidatosAVaga

    
    if(confirm(`Você tem certeza que deseja criar uma vaga com as seguintes informações: 
    Identificação da vaga: ${identificacao};
    Descrição da vaga: ${descricao};
    Data limite: ${dataLimite} ?`)){
        vagas.push(novaVaga)
    } else {
        return
    }
}

function listarVagas(){
    if(vagas.length === 0){
        alert("Não há vagas cadastradas!")
    } else{
        let listaDeVagas = "Lista de vagas cadastradas:\n"
        vagas.forEach((vaga, indice) =>{
            listaDeVagas += `${indice +1}. ${vaga.identificacao} - ${vaga.candidatosAVaga.length} candidatos;\n`
        })
        alert(listaDeVagas)
    }
}

function visualizarVaga(){
    const indice = parseInt(prompt("Qual o índice da vaga que deseja visualizar? (Cancele e veja as vagas listadas para descobrir seus índices caso não saiba).")) - 1

    if (indice >= 0 && indice < vagas.length) {
        let vaga = vagas[indice]
        alert(`Índice: ${indice+1}
        Nome: ${vaga.identificacao}
        Descrição: ${vaga.descricao}
        Data limite: ${vaga.dataLimite}
        Quantidade de candidatos à vaga: ${vaga.candidatosAVaga.length}
        Candidato(s) à vaga: ${vaga.candidatosAVaga}`)
    } else{
        alert("Ação cancelada ou o índice apresentado não faz referência à nenhuma vaga!")
    }
}

function inscreverCandidato() {
    const nomeCandidato = prompt("Qual o nome do candidato?")
    const indice = parseInt(prompt("Qual o índice da vaga na qual deseja adicionar o " + nomeCandidato + "?") - 1)

    if (indice >= 0 && indice < vagas.length) {
        console.log(vagas[indice]);
        const confirmacao = confirm(`Tem certeza que deseja adicionar ${nomeCandidato} à ${vagas[indice].identificacao}?`)
        if (confirmacao) {
            vagas[indice].candidatosAVaga.push(nomeCandidato) 
            alert(`${nomeCandidato} foi adicionado à vaga ${vagas[indice].identificacao}!`)
        } else{
            alert("O candidato não foi adicionado à vaga...")
        }
    }
}

function excluirVaga() {
    const indice = parseInt(prompt("Qual o índice da vaga a ser excluída?")) - 1
    if (indice >= 0 && indice < vagas.length) {
        const confirmacao = confirm(`Tem certeza que deseja excluir a vaga de ${vagas[indice].identificacao}?`)
        if (confirmacao) {
            alert("A vaga " + vagas[indice].identificacao + " foi excluída com sucesso!")
            vagas.splice(indice, 1)
        } else{
            alert("A exclusão da vaga foi cancelada!")
        }
    } else{
        alert("O índice apresentado não faz referência à nenhuma vaga!")
    }
}

botaoHtml.addEventListener("click", ()=>{
    mostrarMenu()
})
mostrarMenu()