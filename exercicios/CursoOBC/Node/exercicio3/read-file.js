const fs = require('node:fs')

fs.readFile(filename, "utf-8", (error, data) => {
    if (error) {
        console.log("Erro ao ler o arquivo: ", error.message)
        return
    }

    const entries = data.split(",")
    console.log(entries)
    entries.forEach((entry) => console.log(entry))
})



// try {
//     const data = fs.readFileSync('./arquivo.txt', 'utf-8')
//     console.log(data);
// } catch (error) {
//     console.log('Erro ao ler o arquivo!'+ error.message);
// }