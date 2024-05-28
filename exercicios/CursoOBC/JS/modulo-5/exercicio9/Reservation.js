class Reservation{
    constructor(guests, room, days){
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFee(){
        console.log(`Base fee is $${Reservation.baseFee},00`)
    }

    static get premiumFee(){
        return Reservation.baseFee * 1.5
    }
}

const r1 = new Reservation(3, "201", 5)
Reservation.showBaseFee()
console.log(`The premium fee is $${Reservation.premiumFee},00`);

console.log(r1);

Reservation.baseFee = 200

const r2 = new Reservation(2,"104",2)
console.log(r2);
console.log(`The premium fee is $${Reservation.premiumFee},00`);