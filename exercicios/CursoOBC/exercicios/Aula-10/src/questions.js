import { createQuestion, deleteQuestion, fetchQuestions, fetchResults, updateQuestion } from "./api";
import { input, h3, label, div, button, select, option } from "./elements";

export async function createEmptyQuestion(managerElement,results){
    const question = await createQuestion()
    createQuestionForm(managerElement, question, results)
}

export async function loadQuestionsManager(managerElement){
    managerElement.innerHTML = ""
    const questions = await fetchQuestions()
    const results = await fetchResults()

    questions.forEach((question) => createQuestionForm(managerElement, question, results))
}

function createQuestionForm (managerElement,question, results){
    const questionForm = document.createElement("form")
    questionForm.className = "questionForm"

    questionForm.addEventListener("submit", async(event)=>{
        event.preventDefault()

        const formData = new FormData(event.target)
        const text = formData.get("text")

        const points = {}
        points.fullyDisagree = formData.get("fullyDisagree")

        await updateQuestion(question.id, text)
    })
    
    const questionFormTitle = h3(`Pergunta de id: ${question.id}`)
    const questionTextLabel = label("Texto da pergunta:", `question-${question.id}-text`)
    const questionTextInput = input("text", {
        id: `question-${question.id}-text`,
        name: "text",
        value: question.text
    })

    const fullyDisagreeField = createAlternativeField({ 
        labelText: "Dicordo completamente",
        fieldId: `question-${question.id}-fully-disagree`,
        fieldName: "fullyDisagree"
    }, question, results)

    const buttonGroup = div({className:"buttonGroup"})
    
    const submitBtn = button("Salvar pergunta", {type: "submit" })
    const deleteBtn = button("Excluir pergunta", {
        type: "button", 
        onClick: async()=>{
            await deleteQuestion(question.id)
            questionForm.remove()
        }
    })

    buttonGroup.append(submitBtn, deleteBtn)
    
    questionForm.append(
        questionFormTitle,
        questionTextLabel,
        questionTextInput,
        fullyDisagreeField,
        buttonGroup
    )
        questionForm.addEventListener("submit", async (event)=>{
            event.preventDefault()
    
            const formData = new FormData(event.target)
            const text = formData.get("text")
    
            await updateQuestion(question.id, text)
            alert(`Pergunta atualizada com sucesso!`)
        })
    


    managerElement.append(questionForm)
}


// alternative = { labelText, id, name }
function createAlternativeField(alternative, question, results) {
    const container = div({className:"inline-block"})

    const fieldLabel = label(alternative.labelText, alternative.fieldId)
    const fieldSelect = select(alternative.fieldId, alternative.fieldName)

    const defaultOption = option("Selecione...", { selected: true, disabled: true, } )
    fieldSelect.options.add(defaultOption)

    results.forEach((result) => {
        const resultOption = option(result.name, {
            value: result.id,
            selected: question.points && question.points[alternative.fieldName] === result.id
        })
        fieldSelect.options.add(resultOption)
    })

    container.append(fieldLabel, fieldSelect)
    return container
}