const express = require('express'); // memanggil module express
const app = express(); // mengunakan module express
const port = 3000; // set port

const route = require('./routers')
app.use(route)

app.listen(port, () => console.log(`Server listining at http://localhost:${port}`))

//get() -> merupakan method HTTP GET, dan untuk method yang lain bisa disesuaikan misal post, put, dan delete
app.get('/', (req, res) => res.send("Hello World!"))  // use send -> untuk mengirim semua jenis response, dimana argument bisa berisi konten serta bisa mengakhiri proses response

app.get('/router', (req, res) => {
    res.write('hello ')
    res.write('faqih')
    res.end()
}) // use write -> untuk menulis konten ke response & use end untuk mengakhiri proses response dimana argumentnya bisa berisi konten

// contoh method post
app.post('/post', (req, res) => {
    res.send('ini menggunakan method post')
})

// contoh method put
app.put('/put', (req, res) => {
    res.send('ini request dengan methos put')
})

// contoh dengan delete
app.delete('/delete', (req, res) => [
    res.send("ini request dengan mengunakan method delete")
])

// contoh route yang sama dengan semua method
app.all('/universal', (req, res) => {
    res.send("ini request dengan method "+req.method)
})

// request dengan routing dinamis
app.get('/post/1', (req, res) => {
    res.send("ini halama artikel ke-1 dengan id 1")
})

app.get('/post/2', (req, res) => {
    res.send("ini halama artikel ke-2 dengan id 2")
})

app.get('/post/n', (req, res) => {
    res.send("ini halama artikel ke-n dengan id n")
})

// ini cara yang benar
// app.get('/post/:id', (req, res) => {
//     res.send("ini halaman artikel ke-"+req.params.id+" dengan id "+req.params.id)
// })

// contoh routing dengan parameter query
app.get('/food', (req, res) => {
    res.send(req.query)
    console.log(req.query);
    res.end()
}) // cara pakai denga menambahkan '?' pada akhir route dan masukan params jika params lebih dari 1 maka digabung dengan '&'
//contoh http://localhost:3000/food?halaman=3&julud=faqih

// regular expression pada routing
app.get('/page-*', (req, res) => {
    res.send('route: '+req.path)
})

// yang ini aku masih binggung
app.get('/post/:id?', (req, res) => {
    res.send('artikel ke-'+req.params.id)
})
// yang diatas tanda tanya (?) itu optional atau bisa ada bisa tidak

//contoh hendle log dengan middleware

const log = (req, res, next) => {
    console.log(Date.now())
    next()
   }
app.use(log)

// kode deklarasi untuk routing
app.use((req, res, next) => {
    res.status(404).send("resource tidak ada")
})

// supa lebih user friendly
app.use((req, res, next) => {
    res.json({
        status : "eror",
        massage: "data tidak ditemukan"
    })
})