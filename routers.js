// membuat routing dengan module
const { dir } = require('console');
const { Router } = require('express');
const express = require('express');
const path = require('path');
const route = express.Router();

route.get('/bag2', (req, res) => {
    res.send("hai kawan apa kabar ?");
});

route.post('bag2/:id?', (req, res) => {
    if(req.params.id) res.send('artikel ke-'+req.params.id);
});


// route untuk login
route.post('/login', (req, res) => {
    const {username, password, email} = req.body
    console.log(req.body);
    res.send(`Anda login dengan username ${username} dan password ${password} dan email ${email}`);
});

//route untuk download file
route.get('/download', (req, res) => {
    const fileName = 'logo.png'
    res.sendFile(__dirname + '/'+ fileName)
})

// route download dengan mengubah nama utama
route.get('.download2', (req, res) => {
    const fileName = 'logo.png'
    res.sendFile(path.join(__dirname, fileName), {
        header:{
            'Content-Disposition' : 'attachment; filename = "logo.png"'
        }
    })
})

// route download dengan method download
route.get('/download3', (req, res) => {
    const fileName = 'logo.png'
    res.download(path.join(__dirname, fileName), 'file-utama.png')
})

// route untuk mereview file terlebih dulu
route.get('/review-file', (req, res) => {
    const fileName = 'logo.png'
    res.sendFile(path.join(__dirname, fileName), {
        header:{
            'Content-Type' : 'image/png'
        }
    })
})


module.exports = route