const fs = require('fs')
const http = require('http')
http.createServer((request, response) => {
    const {url, method} = request
    if(url === '/' && method === 'GET'){
        fs.readFile('index.html',(err,data) =>{
            if(err){
                response.writeHead(500,{
                    'Content-Type': 'text/plain;charset=utf-8'
                })

                response.end('500 服务器挂了')
                return
            }
            response.statusCode = 200
            response.setHeader('Content-Type', 'text/html')
            response.end(data)
        })
    }
    else if(url === '/users' && method ==='GET'){
        console.log(1)
    }
    else{
        response.statusCode = 404
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.end('404 没这玩意')
    }
})
.listen(3000,() => {
    console.log('Server at 3000')
})