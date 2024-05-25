const { User } = require("./User");
const { Product } = require("./Product")

const ps5 = new Product("PlayStation 5", "Console de jogos", 2200)
const user1 = new User("Dauan Ciniz", "dauan@gmail.com", "senhaTeste")

console.log(ps5);
console.log(user1);
console.log(user1.login("dauan@gmail.com", "senhaTestee"));
console.log(ps5.addOnStock(5));
console.log(ps5.calculateDiscount(35));
