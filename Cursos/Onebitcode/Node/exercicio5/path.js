const path = require('node:path')

const dir = 'src'
const file = 'app.js'

const fullPath = path.join(dir, file)

const relativePath = '../arquivos/relatorio.pdf'

const absolutePath = path.resolve(relativePath)

console.log(fullPath);
console.log(absolutePath);

const fileName = path.basename(relativePath)
const ext = path.extname(relativePath) //.pdf
console.log(fileName); //relatorio.pdf
console.log(ext);
