const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    // set header content type
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello world</h1>')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('Server Start on Port 3000')
})