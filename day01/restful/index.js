const Koa = require('koa')
const app = new Koa()

const config = require('./conf')
const {loadModel} = require('./framework/loader.js')
loadModel(config)(app)

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const restful = require('./framework/router')
app.use(restful)

app.listen(3000, () => {
    console.log('Server at 3000')
})