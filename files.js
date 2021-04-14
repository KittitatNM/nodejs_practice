// https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=2&ab_channel=TheNetNinja

const fs = require('fs')
const { lookupService } = require('node:dns')

if (!fs.existsSync('./docs')) {
    fs.mkdir('./docs', (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Create Directory Success')
        }
    })
}
// else {
//     fs.rmdir('./docs', {
//         recursive: true,
//     }, (err) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log('Remove Directory Success')
//         }
//     })
// }

//  remove recursive directory

// fs.writeFile('./docs/blog.txt', 'HelloWorld', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('Create File Success')
//     }
// })

fs.readFile('./docs/blog.txt','utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})