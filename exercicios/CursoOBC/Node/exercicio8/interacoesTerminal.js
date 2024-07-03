const process = require('node:process')
const readLine = require('node:readline')

// process.stdout.write('Olá mundo!')

// process.stdin.on('data', (data)=>{
//     process.stdout.write('Voce digitou: '+ data)
// })

const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })
// rl.on('line', (input)=>{
//     rl.write('Você digitou: ' + input)
// })

rl.question('Qual o seu nome?\n', (answer)=>{
    rl.write(`Olá, ${answer}!\n`)
    rl.close()
})

rl.on('close', ()=>{
    rl.write('Saindo...')
    // process.exit(0)
})

rl.on('SIGINT', ()=>{
    rl.question('Deseja realmente sair? :( (s/n)', (answer)=>{
        if (answer.trim().toLocaleLowerCase() === 's') {
            process.exit(0)
        } else {
            rl.write('Você escolheu continuar ou deu uma opção inválida')
        }
    })
})

