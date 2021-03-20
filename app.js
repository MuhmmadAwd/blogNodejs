const express = require("express")
const app = express();

app.use(express.json())

app.use(require("./rout/addBlog.rout"))
app.use(require("./rout/getAllBlogs.rout"))
app.use(require("./rout/deleteblog.rout"))
app.use(require("./rout/blogUpdate.rout"))
app.use(require("./rout/getdetails.rout"))

// app.get(`/getAllBlogs/2`, (req, res) => {
//     query.execute(`select * from blogs where id=2`,(err,data)=>{
//         res.json(data)
//     })
    
// });

app.get("/",(req,res)=>{
    // query.execute(`insert into blogss(title1,pra) values ("ali555","ali@ss.com")`)
    res.json({text:"hello"})
})

app.listen(3000,()=>{
    console.log("done")
})