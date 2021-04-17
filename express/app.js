const express = require('express')
const rootPath = 'C:/Users/SoHoH/Documents/WebApplication/nodejs_practice/server/views';

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs')

// listen for request 
app.listen(3000, () => {
    console.log('Server start in port : 3000')
})

app.get('/', (req, res) => {
    // res.send("<p>HomePage</p>")
    // console.log(__dirname)
    res.sendFile('./index.html', { root: rootPath })
})

app.get('/about', (req, res) => {
    // res.send("<p>About</p>")
    res.sendFile('./about.html', { root: rootPath })
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// 404 Page
// middleware
app.use((req, res, next) => {
    console.log(req.query, req.url)
    res.status(404).sendFile('./404.html', { root: rootPath })
})
