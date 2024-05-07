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
        // Os parâmetros 'paciente' e 'index' são nomeados pelo programador mas eles fazem referência a um dado que o próprio JS dá em funções de callback dentro de um forEach quando trabalhamos com arrays, na seguinte ordem: O valor atual do elemento, O índice do elemento e o próprio array percorrido.
        filaEspera.forEach((paciente, index) => {
            listaPacientes += `${index + 1}. ${paciente}\n`;
        });
        alert(listaPacientes);
    }
}

// Iniciar o programa
mostrarMenu();