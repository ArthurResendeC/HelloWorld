class Loan{
    constructor(value, createdOn, installments){
        this.value = value
        this.createdOn = createdOn
        this.installments = installments
    }

    static #interestRate = 0

    static set changeInterestRate(newRate){
        if (!isNaN(newRate) && newRate >= 0) {
            this.#interestRate = newRate * 0.01
        } else{
            console.log("The new interest rate presented is not a valid number!");
        }
    }
    static get readInterestRate(){
        return this.#interestRate * 100
    }
}

module.exports = Loan