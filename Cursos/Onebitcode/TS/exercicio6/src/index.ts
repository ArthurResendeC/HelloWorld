type Planet = "Terra" | "Mercúrio" | "Vênus" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet:Planet = "Vênus"

function checkPlanet(planet:Planet) {
    if (planet === "Vênus") {
        console.log("Estamos em Vênus");
    }
}

let homePlanet:Planet = "Terra"

type GreetingCallback = (name:string) => void

function greet(callbackfn:GreetingCallback) {
    callbackfn('Arthy')
}