const AddBlog = require("express").Router()
const query = require("../db")

AddBlog.post('/addBlog', (req, res) => {
    console.log(req.body)
    query.execute(`insert into blogs(title,p) values("${req.body.title}","${req.body.p}")`)
});

module.exports=AddBlog