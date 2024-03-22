function somaAssincrona( a, b) {
    return new Promise((resolve, reject) => {
        const numA = parseFloat(a)
        const numB = parseFloat(b)

        if (isNaN(numA) || isNaN(numB)) {
            reject("Números inválidos")
        } else {
            resolve (a + b)
        }
    })
}

console.log("Iniciando o Script");

somaAssincrona(1,9).then(function (resultado) {
    console.log(`O resultado da soma é: ${resultado}`);
}).catch(function(motivo){
    console.log(motivo);
}).finally(function(){
    console.log("Promise finalizada!");
})

console.log("Script finalizado!");