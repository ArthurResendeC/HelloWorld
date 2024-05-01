const word = prompt("Informe uma palavra:").toLocaleLowerCase()
let reversedWord = ""

for(let i = word.length - 1; i >= 0 ; i--){
    reversedWord += word[i]
}

if (word === reversedWord){
    alert(`${word} é um palíndromo!`)
} else{
    alert(`${word} não é um palíndromo!
    ${word} != ${reversedWord}`)
}