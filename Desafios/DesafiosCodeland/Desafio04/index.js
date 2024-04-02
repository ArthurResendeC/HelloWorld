import { yourBad } from "./src/alerts.js";

const esqueceu = document.getElementById("forgot")
esqueceu.addEventListener("click", yourBad)

const form = document.getElementById("formulary")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
})