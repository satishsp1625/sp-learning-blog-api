const express = require("express");
const Article = require("../models/article");

const router = express.Router();

//Post new article
router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    })

    await article.save().then(() => {
        res.send(article)
    }).catch((error) => {
        res.send({ "Error": "Error occured while saving article to DB" })
    })
})

//Get All Articles
router.get("/", async (req, res) => {
    const articles = await Article.find()
    res.send(articles);
})

//Get article by ID
router.get("/:articleId",async (req, res) => {
    const article = await Article.findById(req.params.articleId)
    res.send(article);
})

module.exports=router