import fs from 'node:fs'

export default function reWriteFile(content, fileName){
    const exists = fs.existsSync(`${fileName}.txt`)
    if (exists) {
        fs.writeFile(`${fileName}.txt`, content, 'utf-8', (err)=>{
            if (err) {
                console.log(err.message)
            }
        })
    } else {
        console.log('O arquivo informado não existe no momento de editar o arquivo!');
    }
}

