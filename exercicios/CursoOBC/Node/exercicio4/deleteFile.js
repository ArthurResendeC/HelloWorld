import fs from 'node:fs'

export default function deleteFile(fileName){
    fs.unlink(`${fileName}.txt`, (err)=>{
        if (err) {
            console.log('Erro ao deletar arquivo');
        }
        console.log('Arquivo deletado com sucesso!');
    })
}
