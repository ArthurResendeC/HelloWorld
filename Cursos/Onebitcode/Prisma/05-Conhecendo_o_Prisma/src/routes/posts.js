const prisma = require('../database/index')
const { Router } = require('express')

const router = Router()

router.get("/", async (req, res) => {
    const posts = await prisma.post.findMany()
    res.json(posts)
})

router.get("/:id", async (req, res) => {
    const post = await prisma.post.findUnique({
        where: { id: +req.params.id },
        include: { author: true }
    })
    res.json(post)
})

router.post("/", async (req, res) => {
    const { title, content, authorId } = req.body
    const newPost = await prisma.post.create({
        data: {
            title,
            content,
            authorId,
            slug: title.concat(authorId) 
        }
    })
    res.status(201).json(newPost)
})


router.put("/:id", async (req, res) => {
    const { title, content } = req.body
    const updatedPost = await prisma.post.update({
        where: {
            id: +req.params.id
        },
        data: {
            title,
            content
        }
    })
    res.json(updatedPost)
})

router.delete("/:id", async (req, res) => {
    const deletedPost = await prisma.post.delete({
        where: {
            id: +req.params.id
        }
    })
    res.json(deletedPost)
})

module.exports = router