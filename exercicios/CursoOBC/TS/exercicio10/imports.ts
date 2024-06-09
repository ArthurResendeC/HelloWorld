import { Spaceship } from "./exports";
// import _ from "lodash";
//@types/lodash instalado, cheque o package.json
interface Battlespaceship extends Spaceship{
    weapons:number
}

let xwing:Battlespaceship = {
    name: 'X-wing',
    pilot: 'Luke',
    speed: 250,
    weapons: 4
}

