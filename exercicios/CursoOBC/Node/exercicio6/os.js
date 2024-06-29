const os = require('node:os')

const osP = os.platform()
const osV = os.version()
console.log(osP);
console.log(osV);

const arquitetura = os.arch()
console.log(arquitetura);
const processors = os.cpus()
console.log("Núcleos do processador: ", processors.length);

const memoria = os.totalmem()
console.log("Total de memória RAM do PC: ", (memoria/1024/1024/1024).toFixed(2), "GB");
const tipo = os.type()
console.log(tipo); //windows_NT