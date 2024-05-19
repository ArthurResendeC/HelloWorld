let numerosTeste = [ 1, 2, 15, 2, 12, 3, 5, 2, 1, 20, 4 ]
console.log(...numerosTeste);

function media(...numbers) {
    const soma = numbers.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    return soma / numerosTeste.length
}

console.log(media(...numerosTeste));


function mediana(...numbers) {
    numbers.sort((a,b)=> a - b)

    const indexCentral = Math.floor(numbers.length / 2)

    if(indexCentral % 2 === 0){
        return (numbers[indexCentral - 1] + numbers[indexCentral] / 2)
    } else{
        return numbers[indexCentral]
    }
}

console.log(mediana(...numerosTeste));
