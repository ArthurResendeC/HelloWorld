class Book {
    constructor(title){
        this.title = title
        this.published = false
    }


    publish(){
        this.published = true
    }
}


const Eragon = new Book("Eragon")
const IA2041 = new Book("2041")


IA2041.publish()

console.log(Eragon);
console.log(IA2041);
console.log(Eragon instanceof Book);
console.log([Eragon, IA2041] instanceof Array);
console.log(Eragon instanceof Object);