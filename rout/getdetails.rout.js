const getdetails =require("express").Router()
const query = require("../db")

getdetails.get('/getdetails:id', (req, res) => {
    query.execute(`select * from blogs where id = ${req.params.id}
                  `,(err,data)=>
    {
        res.json(data)
    })});

    module.exports=getdetails