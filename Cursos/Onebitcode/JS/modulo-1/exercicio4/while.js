const nomeTurista = prompt("E aí turista, qual o seu nome?")
let cidadesVisitadas = ""
let contagemDeCidades = 0

let continuar = confirm("Você visitou alguma cidade?")

while(continuar){
    let cidade = prompt("Qual é o nome da cidade da visitada?")
    cidadesVisitadas += " - " + cidade + ";\n"
    contagemDeCidades++
    continuar = confirm("Você visitou alguma outra cidade?") 
} 
if(contagemDeCidades <=0){
    alert(`O ${nomeTurista} ainda não visitou nenhuma cidade :((`)
} else {
alert(`O ${nomeTurista} visitou ${contagemDeCidades} cidade(s), sendo ela(s): 
${cidadesVisitadas}`)
}