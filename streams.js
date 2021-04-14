const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog.txt', { encoding: 'utf-8' })
const writeSteam = fs.createWriteStream('./docs/blog1.txt')

// readStream.on('data', (chunk) => {
//     console.log(chunk)
//     writeSteam.write(chunk)
// })

readStream.pipe(writeSteam)