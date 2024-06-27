import deleteFile from "./deleteFile.js"
import readFile from "./read-file.js"
import reWriteFile from "./reWrite-file.js"
import createFile from "./write-file.js"


createFile('Conteúdo inicial do meu arquivo\nCriado com o Node.js', 'meuarquivo')
setTimeout(()=>{
    readFile('meuarquivo')
}, 1*1000)
setTimeout(()=>{
    reWriteFile('Novo conteúdo', 'meuarquivo')
}, 2* 1000)
setTimeout(()=>{
    readFile('meuarquivo')
},3 * 1000)
setTimeout(()=>{
    deleteFile('meuarquivo')
}, 6 * 1000)