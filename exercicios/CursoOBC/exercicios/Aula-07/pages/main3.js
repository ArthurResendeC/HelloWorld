function somaAssincrona( a, b) {
    return new Promise((resolve, reject) => {
        const numA = parseFloat(a)
        const numB = parseFloat(b)

        if (isNaN(numA) || isNaN(numB)) {
            reject(new Error(`That's not a number!`))
        } else {
            resolve (a + b)
        }
    })
}

console.log("Iniciando o Script");

somaAssincrona(1,364).then(function (resultado) {
    console.log(`O resultado da soma é: ${resultado}`);
}).catch(function(motivo){
    console.log(motivo);
}).finally(function(){
    console.log("Promise finalizada!");
})


async function somaAsync(a,b){
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    if (isNaN(numA) || isNaN(numB)) {
        return Promise.reject("Números inválidos")
    } 
    return numA + numB
}

async function executar(){
    try {
        const resultado = somaAsync(1,5);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
console.log("Script finalizado!");
