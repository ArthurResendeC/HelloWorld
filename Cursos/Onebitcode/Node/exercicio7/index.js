const os = require('node:os')
const path = require('node:path')
const fs = require('node:fs')

// Função que obtém dados do sistema
function getData() {
    const systemName = os.type();
    const arch = os.arch();
    const processor = os.cpus();
    const uptime = os.uptime() / 60;
    const memoryUseTotal = os.totalmem() - os.freemem();
    const memoryPercentage = (memoryUseTotal / os.totalmem()) * 100;
    
    return(
        `Sistema operacional: ${systemName};
Arquitetura: ${arch};
Processador: ${processor[0].model};
Tempo de atividade: ${uptime.toFixed(2)} min;
Memória RAM utilizada: ${memoryPercentage.toFixed(2)}%`
    );
}

// Função que usa os dados para atualizar o arquivo
function useData() {
    const data = getData();
    const logDir = path.resolve(__dirname, 'log');
    const logFile = path.resolve(logDir, 'log.txt');
    
    // Cria a pasta 'log' se não existir
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    // Adiciona os dados ao arquivo, com duas linhas de separação
    const logEntry = `${data}\n\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo', err);
        } else {
            console.log('Arquivo atualizado');
        }
    });
}

// Atualiza o arquivo a cada 1 segundo
setInterval(useData, 1 * 1000);
