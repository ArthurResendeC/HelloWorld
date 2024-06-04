function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            if (1 + 1 === 2) {
                reject('1 + 1 não é igual a 2')
            } else {
                console.log('Resolvendo a promise...')
                resolve('Resultado')
            }
        }, 3 * 1000)
    })
}

const p = execute()

p.then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
})

function testar(){
    return new Promise((resolve, reject)=>{
        console.log("Testando");
        setTimeout(() => {
            console.log("Testando depois do timeout");
            resolve('Resultado da promise')
        }, 3* 1000);
    })
}

const t = testar()

t.then((result)=> { console.log(`O resultado do teste foi: ${result}!`); }).catch((err)=>{console.log(`O tal do erro foi ${err}`);})