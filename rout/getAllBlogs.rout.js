const getAllBlogs = require("express").Router()
const query = require("../db")

getAllBlogs.get('/getAllBlogs', (req, res) => {
    query.execute(`select * from blogs`,(err,data)=>{
        res.json(data)
    })
    
});

module.exports=getAllBlogs