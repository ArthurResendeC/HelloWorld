function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function (quantity) {
        this.inStock += quantity
    }
    this.save = function(){
        //salva no banco de dados
    }
}

const author = { name: "Chistopher Paolini"}
const tags = ["fantasy", "adventure"]

const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon);

const eldest = new Book("Eldest", 499, tags, author)

console.log(eldest);

eragon.addOnStock(15)

console.log(eragon);