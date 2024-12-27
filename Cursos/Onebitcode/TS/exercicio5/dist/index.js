"use strict";
let spaceships = [];
function saveSpaceship(name, pilot, crewLimit, crew, inMission = false) {
    let spaceship = {
        name: name,
        pilot: pilot,
        crew: crew,
        crewLimit: crewLimit,
        inMission: inMission
    };
    spaceships.push(spaceship);
    return spaceship;
}
function addMember(spaceship, crewMember) {
    if (spaceship.crewLimit < spaceship.crew.length) {
        spaceship.crew.push(crewMember);
    }
    else {
        alert(`A nave ${spaceship.name} está cheia!\n${spaceship.crew.length} assentos ocupados de ${spaceship.crewLimit} assentos disponíveis...`);
    }
}
function sendToMission(spaceship) {
    if (spaceship.inMission === true) {
        alert(`A nave ${spaceship.name} já está em missão com ${spaceship.crew.length} tripulantes a bordo!`);
    }
    else if (spaceship.crew.length <= Math.floor(spaceship.crewLimit / 3)) {
        alert(`A nave ${spaceship.name} tem que ter pelo menos um terço de sua capacidade de tripulantes ocupada antes de partir em missão!`);
    }
    else {
        spaceship.inMission = true;
        alert(`A nave ${spaceship.name} foi saiu para uma missão com sucesso!`);
    }
}
function listSpaceships() {
    spaceships.map(s => {
        console.log(`Nome: ${s.name}\nTripulação: ${s.crew.length}/${s.crewLimit}\nEm missão: ${s.inMission}`);
    });
}
const shipName = prompt('Qual o nome da sua nave?');
const pilot = prompt("Qual o nome do piloto da sua nave?");
const limiteT = Number(prompt("Dite um limite de tripulação para a sua nave:"));
const crew = ['Teste', 'Ciclano', 'John Doe'];
const ship = saveSpaceship(shipName, pilot, limiteT, crew);
const shipname2 = 'Teste';
const pilot2 = 'Piolt2';
const limit = 8;
const crew2 = ['teste', 'Ciclano', 'Fulano'];
const ship2 = saveSpaceship(shipname2, pilot2, limit, crew2);
console.log(spaceships);
listSpaceships();
