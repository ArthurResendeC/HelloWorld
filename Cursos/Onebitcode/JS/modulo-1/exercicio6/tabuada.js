let userNumber = parseInt(prompt("Digite um número e descubra seus 20 produtos!"))
let results = ""


for (let i = 1 ; i <= 20 ; i++) {
    results += ("\n " + (userNumber * i))
}

alert(results)
