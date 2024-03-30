import { createQuestion } from './src/api'
import { addSubmitResultListener, loadResults } from './src/results'
import './style.css'


document.addEventListener("DOMContentLoaded", ()=>{
  const newResultForm = document.getElementById("newResultForm")
  const resultsList = document.getElementById("resultsList")
  if(newResultForm){addSubmitResultListener(newResultForm)}
  if(resultsList){loadResults(resultsList)}

  const newQuestionBtn = document.getElementById("newQuestion")
  if(newQuestionBtn){
    newQuestionBtn.addEventListener("click",()=>{
      createQuestion()
    })
  }
})