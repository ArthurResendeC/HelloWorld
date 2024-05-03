const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr);

//Adicionar elementos
//push - adiciona um elemento no final de um array e retorna o tamanho final do array (number)

arr.push("Boromir")
console.log(arr);

//unshift - adiciona elementos no início do Array e retorna o tamanho final do array (number)

arr.unshift("Teste")
console.log(arr);

//pop - remove e retorna o elemento que está no final do array

let ultimoElemento = arr.pop()

console.log(arr);
console.log(ultimoElemento);

//shift - remove elementos do começo do array e o retorna

ultimoElemento = arr.shift()
console.log(arr);
console.log(ultimoElemento);

//includes - verificar se um elemento está presente em um array

const inclui = arr.includes("Gandalf")
console.log(inclui);

//indexOf - Descobrir o i[index] de um elemento de um array
const indice = arr.indexOf("Gandalf")
console.log(indice);

//Cortar e Concatenar
//slice - pega uma parte de um array, designada por um index inicial e um final(opcional), e a retorna
const hobbits = arr.slice(0,4)
const outros = arr.slice(-4) //Valores negativos retornam os últimos elementos do array (-2 retorna os últimos 2 elementos)
console.log(hobbits);
console.log(outros);

const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade);

//Substituição dos Elementos
//splice - remover um grupo de elementos e substituí-lo por outro [indice inicial, quantos a partir dali cortar, o que adicionar]; Também devolve o(s) elemento(s) removido(s) dentro de um array.
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade);
console.log(elementosRemovidos);

//Iterar sobre os elementos do array
//usando o for
for (let i = 0; indice < sociedade.length; i++){
    const elemento = sociedade[i]
    console.log(elemento + " se encontra na posição " + i);
}