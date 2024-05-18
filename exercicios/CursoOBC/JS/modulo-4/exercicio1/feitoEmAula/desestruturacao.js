const person = {
    name: "luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

const name = person.name

const { job, parents } = person

console.log(job, parents); // Vai exibir a string "farmer" no console.

const [father, mother] = parents

console.log(father, mother); // Vai exibir os "parents" a ordem das consts declaradas é a ordem do array! father === parents[0] e mother === parents[1] 

function createUser({name,job,parents}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)

console.log(luke);