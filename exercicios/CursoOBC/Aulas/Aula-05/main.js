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
