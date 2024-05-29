const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

class Account{
    #balance = 0
    constructor(owner){
        this.owner = owner
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance(){
        return this.#balance
    }

    deposit(value){
        const deposit = new Deposit(value, new Date())
        this.deposits.push(deposit)
        this.#balance += value
    }

    transfer(receiver, value){
        const transfer = new Transfer(this.owner, receiver, value, new Date())
        this.transfers.push(transfer)
        if (this.owner === receiver) {
            this.#balance += value
        } else {
            this.#balance -= value
        }
    }

    takeLoan(value, numInstallments){
        const loan = new Loan(value, new Date(), numInstallments)
        this.loans.push(loan)
        this.#balance += value
    }
}

module.exports = Account