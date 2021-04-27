const express = require('express')
const rootPath = 'C:/Users/SoHoH/Documents/WebApplication/nodejs_practice/server/views';
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog');

const dbUri = 'mongodb://localhost:27017/node_crud'
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        // console.log('connect to database') 
        app.listen(3000, () => {
            console.log('Server start in port : 3000')
            // var now = new Date();
            // now.setTime(now.setTime(now.getTime() + now.getTimezoneOffset() * 60 * 1000))

            // console.log(now.getTime())
            // console.log(now)
            // console.log(now.getTime() + (7 * 3600 * 1000))
            // console.log(now)
            // var newTime = new Date(now.getTime() + (7 * 3600 * 1000))
            // console.log(newTime)
            // console.log(Math.floor(new Date() / 1000.0) + (7 * 3600))
        })
    })
    .catch((err) => { console.log(err) })

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs')

// listen for request 
// app.listen(3000, () => {
//     console.log('Server start in port : 3000')
// })

// middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

// introduction to mongoose 
// mongoose and mongo sandbox routes
// app.get('/blog-add', (req, res) => {
//     const blog = new Blog({
//         title: 'new Blog',
//         snippet: 'about new blog',
//         body: 'more about new blog'
//     })

//     blog.save()
//         .then((result) => { res.send(result) })
//         .catch((err) => { console.log(err) })
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

app.get('/', (req, res) => {
    // res.send("<p>HomePage</p>")
    // res.sendFile('./index.html', { root: rootPath })

    // const blog = [
    //     { title: 'title1', snippet: 'Sunt cillum reprehenderit in adipisicing id qui officia dolore occaecat anim quis.' },
    //     { title: 'title2', snippet: 'Sunt cillum reprehenderit in adipisicing id qui officia dolore occaecat anim quis.' },
    //     { title: 'title3', snippet: 'Sunt cillum reprehenderit in adipisicing id qui officia dolore occaecat anim quis.' },
    // ]
    // res.render('index', { title: 'Homepage', blog })
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    // res.send("<p>About</p>")
    // res.sendFile('./about.html', { root: rootPath })
    res.render('about', { title: 'About' })
})

app.get('/create', (req, res) => {
    // res.send("<p>About</p>")
    // res.sendFile('./about.html', { root: rootPath })
    res.render('create', { title: 'Create' })
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', { title: 'All blogs', blog: result })
        })
        .catch((err) => {
            console.log(err)
        })
})

app.post('/blogs', (req, res) => {
    // console.log(req.body)
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
})


// 404 Page
// middleware
app.use((req, res, next) => {
    // console.log(req.query, req.url)
    // res.status(404).sendFile('./404.html', { root: rootPath })
    res.status(404).render('404', { title: 'Error' })
})
