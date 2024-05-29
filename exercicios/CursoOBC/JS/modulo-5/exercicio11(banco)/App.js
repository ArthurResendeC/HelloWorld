const User = require("./entities/User");

class App {
    static #users = []
    static createUser(fullName, email) {
        if (this.#findUserByEmail(email)) {
            console.log(`Email is already in use!`);
            return null
        }
        const user = new User(fullName, email)
        this.#users.push(user)
        return user
    }

    static #findUserByEmail(email) {
        return this.#users.find(user => user.email === email)
    }

    static deposit(email, value) {
        const user = this.#findUserByEmail(email)
        if (user) {
            user.account.deposit(value)
        } else {
            console.log("User not found!");
        }
    }

    static takeLoan(email, value, numInstallments) {
        const user = this.#findUserByEmail(email)
        if (user) {
            user.account.takeLoan(value, numInstallments)
        } else {
            console.log("User not found");
        }
    }

    static transfer(senderEmail, receiverEmail, value) {
        const sender = this.#findUserByEmail(senderEmail);
        const receiver = this.#findUserByEmail(receiverEmail);
        if (sender && receiver) {
            sender.account.transfer(receiver, value);
        } else {
            console.log('Sender or receiver not found!');
        }
    }

    static changeLoanInterestRate(newRate) {
        Loan.changeInterestRate = newRate;
    }

    static get users(){
        return this.#users
    }
}

const arthur = App.createUser("Arthur Resende Coura", "arthur.resendec@email.com")
console.log(App.users);