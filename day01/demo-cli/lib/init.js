const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const { resolve } = require('path')
const {clone} = require('./downloads')
const log = content => console.log(chalk.green(content))

const spawn = async(...args) => {

    const {spawn} = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close',() => {
            //resolve()
        })
    })
}

module.exports = async name =>{
    clear()
    const data = await figlet('KKB Welcome')
    log(data)

    log('🚀创建项目' + name)
    //await clone('github:su37josephxia/vue-template',name)

    log(`🚲安装依赖...`)
    await spawn("npm.cmd", ["install"],{cwd :`./${name}`})
    log(chalk.green(`
        安装完成
    `))

    await spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run','serve'],{cwd :`./${name}`})
    open("http://localhost:8080");

}