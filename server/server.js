const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    // set header content type

    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>Hello world</h1>')
    // res.end()

    // send html file
    res.setHeader('Content-Type', 'text/html')

    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            // res.write(data)
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Server Start on Port 3000')
})