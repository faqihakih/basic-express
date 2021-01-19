// membuat routing dengan module
const { Router } = require('express');
const express = require('express');
const route = express.Router()

route.get('/bag2', (req, res) => {
    res.send("hai kawan apa kabar ?");
})

route.post('bag2/:id?', (req, res) => {
    if(req.params.id) res.send('artikel ke-'+req.params.id)
})
module.exports = route