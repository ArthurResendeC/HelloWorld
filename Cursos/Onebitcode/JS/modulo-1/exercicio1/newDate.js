const firstName = prompt("Qual o primeiro nome do recruta?")
const lastName = prompt("Qual o sobrenome do recruta?")
const studyField = prompt("Qual o campo de estudo do recruta?")
const dateOfBirthString = prompt("Qual o ano de nacimento do recruta? (AAAA-MM-DD)")
const dateParts = dateOfBirthString.split("-")

const today = new Date();
const year = parseInt(dateParts[0]);
const month = parseInt(dateParts[1]) - 1;
const day = parseInt(dateParts[2]);

const birthDate = new Date(year, month, day)

console.log(year, month,day);
console.log(birthDate);
function calculateAge(){
    const diferencaEmMs = today.getTime() - birthDate.getTime()
    const diferencaDias = Math.floor(diferencaEmMs / (1000* 60 * 60 * 24))

    let Age = Math.floor(diferencaDias / 365)
    return Age
}

let info = `
    Nome completo: ${firstName} ${lastName}
    Campo de estudo: ${studyField}
    Idade: ${calculateAge()}
`

alert(info)