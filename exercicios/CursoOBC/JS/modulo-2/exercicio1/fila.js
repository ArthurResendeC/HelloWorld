// let pacientes = [" Louis Inácio", " Jairo Messi", " Nicolás Verde"]
// let opcaoEscolhida

// do {
//     opcaoEscolhida = prompt(`Lista de pacientes:
//     ${pacientes}
// Escolha uma ação:
// 1- Adicionar pacientes;
// 2- Constar atendimento completo;
// 3- Sair`)

//     switch (opcaoEscolhida) {
//         case "1":
//             const aSerAdicionado = prompt("Qual o nome do paciente a entrar na fila?")
//             pacientes.push(" " + aSerAdicionado)
//             break;
//         case "2":
//             const aSerRemovido = prompt("Qual o nome do paciente que já foi atendido")
//             let indice = pacientes.indexOf(" " + aSerRemovido)
//             if(" " + aSerRemovido == pacientes[indice]){
//                 let pacienteRemovido = pacientes.splice(indice, 1,)
//                 alert(`O paciente ${pacienteRemovido} foi atendido e retirado da fila!`)
//             } else{
//                 alert("Esse paciente não se encontra na fila!")
//             }
//             break
//         case "3":
//             alert("saindo")
//             break
//         default:
//             alert("Opção inválida")
//             break;
//     }
// } while (opcaoEscolhida !== "3");
// Definindo a fila de espera inicialmente vazia
let filaEspera = [];

// Função para exibir o menu e interagir com o usuário
function mostrarMenu() {
    let menu = "===== Consultório Médico =====\n";
    menu += "1. Novo paciente\n";
    menu += "2. Consultar paciente\n";
    menu += "3. Mostrar fila de espera\n";
    menu += "4. Sair\n";
    menu += "===============================\n";
    
    const opcao = parseInt(prompt(menu));

    switch(opcao) {
        case 1:
            novoPaciente();
            break;
        case 2:
            consultarPaciente();
            break;
        case 3:
            mostrarFilaEspera();
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

// Função para adicionar um novo paciente à fila de espera
function novoPaciente() {
    const nome = prompt("Digite o nome do novo paciente:");
    filaEspera.push(nome);
    alert(`${nome} foi adicionado à fila de espera.`);
}

// Função para consultar o próximo paciente da fila de espera
function consultarPaciente() {
    if (filaEspera.length === 0) {
        alert("Não há pacientes na fila de espera.");
    } else {
        const paciente = filaEspera.shift();
        alert(`O próximo paciente a ser consultado é: ${paciente}`);
    }
}

// Função para mostrar a fila de espera atualizada
function mostrarFilaEspera() {
    if (filaEspera.length === 0) {
        alert("Não há pacientes na fila de espera.");
    } else {
        let listaPacientes = "Lista de pacientes na fila de espera:\n";
        filaEspera.forEach((paciente, index) => {
            listaPacientes += `${index + 1}. ${paciente}\n`;
        });
        alert(listaPacientes);
    }
}

// Iniciar o programa
mostrarMenu();