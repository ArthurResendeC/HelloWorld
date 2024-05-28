class Product{
    constructor(name,decription,price,inStock = 0){
        this.name = name
        this.decription = decription
        this.price = price
        this.inStock = inStock
    }

    addToStock(quantity){
        this.inStock += quantity
    }
    removeFromStock(quantity){
        this.inStock -= quantity
    }
}


module.exports = Product