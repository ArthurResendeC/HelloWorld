class Property{
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Property { }

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(someHouse);
console.log(land);
console.log(Math.floor(someHouse.getPricePerSquareMeter()));
// console.log(someHouse instanceof Property); true

class Apartment extends Property{
    constructor(num, area, price){
        // this.area = area
        // this.price = price
        super(area, price)
        this.num = num
    }

    getFloor(){
        return this.num.slice(0, -2)
    }
}

const apt = new Apartment("201", 100, 160000)

console.log(apt);
console.log(apt.getFloor());