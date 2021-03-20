const blogUpdate =require("express").Router()
const query = require("../db")

blogUpdate.put('/blogUpdate', (req, res) => {
    query.execute(`update blogs set title="updatedTitle" where id=${req.body.id}`)
    res.json({massage:"updated"})

});

module.exports=blogUpdate