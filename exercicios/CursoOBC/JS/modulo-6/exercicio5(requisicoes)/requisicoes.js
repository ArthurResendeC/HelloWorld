//API = Application programming interface
//REST = Representational State Transfer
async function getCountries() {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await response.json()

    for (let i = 0; i < characters.results.length; i++) {
        const element = characters.results[i]
        createCharacterCard(element)
    }
}

function createCharacterCard(character) {
    const card = document.createElement("div")
    card.classList.add('country')

    const countryName = character.name
    const name = document.createElement('h2')
    name.textContent = countryName

    const img = document.createElement('img')
    img.src = character.image

    card.append(name, img)
    document.querySelector('#countries').append(card)
}

getCountries()