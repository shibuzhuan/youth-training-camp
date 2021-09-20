const http = require('http')
const { listenerCount } = require('process')

http.createServer((req, res) => {
    console.log('cookie:',req.headers.cookie)
    res.setHeader('Set-Cookie',`abc=123;`)
    res.end('Hello')
})

.listen(3000)