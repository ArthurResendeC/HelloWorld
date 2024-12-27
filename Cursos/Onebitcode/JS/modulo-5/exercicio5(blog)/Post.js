const { Comment } = require("./Comment.js")

class Post{
    constructor(title, content, author){
        this.title = title
        this.content = content
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }

    addComment(author ,content){
        this.comments.push( new Comment(author,content))
    }
}

module.exports = {
    Post
}