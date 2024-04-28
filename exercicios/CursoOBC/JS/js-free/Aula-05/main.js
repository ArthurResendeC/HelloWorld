let pessoa = {
  idade: 28,
  nome: "Isaac",
  endereco: { rua: "Professor Pedro", numero: "839"},
  ola: function(){
    alert(`Olá, mundo! Aqui é o ${this.nome}`)
  }
}

pessoa.ola()

pessoa.nome = "Leonardo"

alert(`Fazendo alteração no objeto...`)

pessoa.ola()

let frutas = ["Maçã"," laranja", " uva", "banana", " abacaxi", " mamão", " melão", " acerola"]
let numeros = [4, 9, 10, 3, false, true, "5"]

alert(frutas)
alert(numeros)

let novoArray = frutas.concat(numeros)
alert(novoArray)

let listaEmTexto = novoArray.join(" ~ ")
alert(listaEmTexto)

let resultado = listaEmTexto.split(" ~ ") //transformou tudo em string, os numeros se perderam!

const duasPrimeiras = frutas.slice(0, 2)
alert(duasPrimeiras)

frutas.splice(2, 4, " limão") //Ele modifica o array original!
alert(frutas)

const numList = [3,7,8,4,2,9,7,]
const dobroDosNumeros = numList.map(function (elementoAtual, indiceAtual, arrayOriginal){
  console.log(`índice: ${indiceAtual} | Valor: ${elementoAtual}`);
  return { dobro: elementoAtual * 2, metade: elementoAtual / 2, valorOriginal: elementoAtual}
})

console.log(dobroDosNumeros);

const numList2 = [3,7,4,9,10,3]

const pares = numList2.filter(function (elementoAtual){
  return elementoAtual % 2 === 0  //verifica se o número é par
})

console.log(numList2, pares);

const pessoas = [
  { id: 100, nome: "Isaac", idade: 28  },
  { id: 101, nome: "Fernando", idade: 27  },
  { id: 102, nome: "Leonardo", idade: 19  },
  { id: 103, nome: "Gabriel", idade: 25  },
]

let idadeMaxima = parseFloat(prompt(`Escolha uma idade máxima:`))

const pessoasDentroDoLimite = pessoas.filter(function(pessoa){
  return pessoa.idade<=idadeMaxima
})
console.log(pessoasDentroDoLimite)

let nomePesquisado = prompt(`Pesquisar por nome:`)

const pessoaEncontrada = pessoas.find(function (pessoa){
  return pessoa.nome === nomePesquisado 
})

console.log(pessoaEncontrada)