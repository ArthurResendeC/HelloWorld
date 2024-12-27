class Product{
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.onStock = 0
    }

    addOnStock(qnt){
        return this.onStock += qnt
    }
    calculateDiscount(discount){   
        return this.price -= (this.price * (discount/100))
    }
}

module.exports = {
    Product
}