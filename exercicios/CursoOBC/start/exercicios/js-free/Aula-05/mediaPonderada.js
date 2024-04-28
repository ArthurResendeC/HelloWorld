const valores = [];
const pesos = [];

let valor = prompt("Insira um valor:");
let peso = prompt("Insira o peso do valor:");

while( valor !== "" && peso !== "") {
    valores.push(parseFloat(valor));
    pesos.push(parseFloat(peso));

    valor = prompt(`Digite um valor ou confirme em branco para finalizar`);
    peso = prompt(`Insira o peso do valor ou confirme em branco para finalizar`);
}

let somaProdutos = 0;
let somaPesos = 0;


for (let i = 0; i < valores.length; i++) {
    somaProdutos += valores[i] * pesos[i];
    somaPesos += pesos[i];
}

const mediaPonderada = somaProdutos / somaPesos;
console.log(somaProdutos);
console.log(somaPesos);

alert(`A média ponderada é ${mediaPonderada.toFixed(2)}`);