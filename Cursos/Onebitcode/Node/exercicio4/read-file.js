import fs from 'node:fs'

export default function readFile(fileName){
    fs.readFile(`${fileName}.txt`, 'utf-8', (err, data)=>{
        if (err) {
            console.log(err.message);
            return
        }
        console.log('Conteúdo do arquivo: '+ data );
    })
}
