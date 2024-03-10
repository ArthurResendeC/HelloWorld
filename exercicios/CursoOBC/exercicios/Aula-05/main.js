//Inicializa os arrays para armazenar os números e os pesos
const numeros = [];
const pesos = [];

//loop para solicitar números e pesos
while (true){
    const numero = parseFloat(prompt(`Digite um número (ou deixe em branco para encerrar):`))
    
    if (isNaN(numero)){
        break;
    } 
    const peso = parseFloat(prompt(`Insira o peso para o número ${numero}:`))
    if (isNaN(peso)){
        alert(`Por favor insira um peso válido!`)
    }
    else{        
        numeros.push(numero);
        pesos.push(peso)        
    }
}

if (numeros.length === 0) {
    alert("Nenhum número foi inserido.Encerrando...");
}   else {

    let somaNotas = 0;
    let somaPesos = 0;

    for (let i =0; i < numeros.length; i++) {
        somaNotas += numeros[i] * pesos[i];
        somaPesos += pesos[i];
    }

    const mediaPonderada = somaNotas / somaPesos;

    alert(`A média ponderada é ${mediaPonderada.toFixed(2)}`)
}