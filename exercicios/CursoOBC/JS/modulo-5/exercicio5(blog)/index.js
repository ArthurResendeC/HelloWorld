const { Author }  = require("./Author.js")

const john = new Author("John Doe")

const post = john.writePost("Título do post", "lorem ipsum dolor sit amet...")

post.addComment("Isaac Pontes", "Parabéns!")
post.addComment("Arthur", "Bagre demais!")

console.log(john);
console.log(post);