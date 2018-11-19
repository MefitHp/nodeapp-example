const http = require('http')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.write('Server initialized bitch')
            res.end()
            break;

        case '/gato':
            res.write('Server initialized cat')
            res.end()
            break;

        case '/perro':
            res.write('Server initialized dog')
            res.end()
            break;
        default:
            break;
    }
})

server.listen(3000)