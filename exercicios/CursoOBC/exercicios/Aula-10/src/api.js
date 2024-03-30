export async function createResult(name, description) {
    const body = JSON.stringify({name, description})

    await fetch("http://localhost:3000/results", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body
    })
}

export async function fetchResults() {
    const results = await fetch("http://localhost:3000/results").then((response) => response.json())
    return results
}

export async function deleteResult(resultId) {
    await fetch(`http://localhost:3000/results/${resultId}`, {method: "DELETE"})
}

//Função para carregar as perguntas do backend
export async function fetchQuestions(){
    return await fetch("http://localhost:3000/questions").then((response) =>response.json())
}
//função para criar uma pergunta vazia
/** 
 * pergunta:
 *  -texto: string
 *  -pontos: objetos
 * 
 *      fullDisagree: resultId (x)
 *      partiallyDisagree: resultId (3x)
 *      dontKnow: resultId (x/2)
 *      partiallyAgree: resultId (0)
 *      fullAgree: resultId (2x)
 */     
export async function createQuestion(text = "Escreva sua pergunta...", points = {
    fullyDisagree: null,
    partiallyDisagree: null,
    dontKnow: null,
    partiallyAgree: null,
    fullyAgree: null
}){
    const body = JSON.stringify({text: text,points: points})

    await fetch("http://localhost:3000/questions", {
        method:"POST",
        headers:{ "Content-Type": "application/json"},
        body: body
    })
}
//uma para editar a pergunta
//e uma para excluir a pergunta