// const nomeDoPrimeiroVeiculo = prompt("Dê um nome ao primeiro veículo:")
// const nomeDoSegundoVeiculo = prompt("Dê um nome ao segundo veículo:")

// const velocidadePrimeiroVeiculo = parseFloat(prompt("Atribua uma velocidade ao primeiro veículo"))
// const velocidadeSegundoVeiculo = parseFloat(prompt("Atribua uma velocidade ao segundo veículo"))

// if(velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo){
//     alert(`${nomeDoPrimeiroVeiculo} é mais rápido que ${nomeDoSegundoVeiculo} por incríveis ${velocidadePrimeiroVeiculo - velocidadeSegundoVeiculo}Km/h!`)
// } else if(velocidadePrimeiroVeiculo < velocidadeSegundoVeiculo){
//     alert(`${nomeDoSegundoVeiculo} é mais rápido que ${nomeDoPrimeiroVeiculo} por incríveis ${velocidadeSegundoVeiculo - velocidadePrimeiroVeiculo}Km/h!`)
// } else{
//     alert("A velocidade de ambos os veículos é igual!")
// }

let dano
const nomeP1 = prompt("Dê um nome ao personagem 1:")
const poderP1 = parseInt(prompt(`Dê um valor ao poder de ${nomeP1}`))

const nomeP2 = prompt("Agora, dê um nome ao personagem 2:")
const vidaP2 = parseInt(prompt(`Dê um valor à vida de ${nomeP2}`))
const defP2 = parseInt(prompt(`Dê um valor à defesa de ${nomeP2}`))
const escudo = confirm(`${nomeP2} usará escudo? (confirme se sim, cancele se não)`)

if(poderP1 > defP2 && escudo === false){
    dano = poderP1 - defP2
} else if(poderP1 > defP2 && escudo === true){
    dano = (poderP1 - defP2) / 2
} else if(poderP1 <= defP2){
    dano = 0
}

const vidaP2Final = vidaP2 - dano

if(vidaP2Final > 0){
    alert(`${nomeP1} possui ${poderP1} de poder e atacou ${nomeP2} que começou com ${vidaP2} de vida, ${nomeP2} agora possui: ${vidaP2Final} `)
} else if(vidaP2Final<=0){
    alert(`${nomeP2} que antes tinha ${vidaP2} de vida e ${defP2} de defesa 
    foi atacado por ${nomeP1} que tinha ${poderP1} de poder, portanto 
    ${nomeP2} morreu...`)
}

