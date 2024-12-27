// type Planet = {
//     name:string
//     satellites: string[]
// }

interface CelestialBody {
    name:string
    mass:number
}

interface Star extends CelestialBody{
    age:number
    planets:Planet
}

interface Planet{
    population:number
    createSatellite:(name:string)=> void
}

let sun:Star

sun.name = "Sol"
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10**9)
sun.planets = {population: 15, createSatellite(name) {
    
},}

type Asteroid = CelestialBody & {
    size:number
}

