import fs from 'node:fs'

export default function createFile(content, fileName){
    fs.writeFile(`./${fileName}.txt`, content, (err)=>{
        if (err) {
            console.error(err.message)
            return
        }
        console.log('Arquivo criado com sucesso!');
    })
}

