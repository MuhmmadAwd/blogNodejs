const deleteblog = require("express").Router()
const query = require("../db")

deleteblog.delete('/deleteblog', (req, res) => {
    query.execute(`delete from blogs where id=${req.body.id}`)
    res.json({massage:"deleted"})
});

module.exports=deleteblog