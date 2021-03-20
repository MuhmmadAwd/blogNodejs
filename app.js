const express = require("express")
const app = express();
const mysql = require("mysql2")
const query =  mysql.createConnection({
    host:"localhost",
    database:"blogdb",
    user:"root",
    password:""
})

app.use(express.json())

app.post('/addBlog', (req, res) => {
    console.log(req.body)
    query.execute(`insert into blogs(title,p) values("${req.body.title}","${req.body.p}")`)
});

app.get('/getAllBlogs', (req, res) => {
    query.execute(`select * from blogs`,(err,data)=>{
        res.json(data)
    })
    
});

app.post('/deleteblog', (req, res) => {
    query.execute(`delete from blogs where id=${req.body.id}`)
    res.json({massage:"deleted"})
});

app.put('/blogUpdate', (req, res) => {
    query.execute(`update blogs set title="updatedTitle" where id=${req.body.id}`)
    res.json({massage:"updated"})

});

app.get(`/getAllBlogs/2`, (req, res) => {
    query.execute(`select * from blogs where id=2`,(err,data)=>{
        res.json(data)
    })
    
});

app.get("/",(req,res)=>{
    // query.execute(`insert into blogss(title1,pra) values ("ali555","ali@ss.com")`)
    res.json({text:"hello"})
})

app.listen(3000,()=>{
    console.log("done")
})