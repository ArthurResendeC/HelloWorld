class Comment{
    constructor(author, content){
        this.author = author
        this.content = content
        this.createdAt = new Date()
    }
}

module.exports = {
    Comment
}