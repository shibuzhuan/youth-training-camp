//esm

import fs from 'fs'
import {createIndexTemplate} from "./indexTemplate.js"
import { createPackageJsonTemplate } from './packageJsonTemplate.js'
import { question } from './question/index.js'
// import { execa } from 'execa';
import { get } from 'http';

const answer = await question()
console.log(answer);

const inputConfig = {
    packageName: answer.packageName,
    port:answer.port,
    middleware: {
        static : answer.middleware.indexOf("koaStatic") !== -1,
        router : answer.middleware.indexOf("koaRouter") !== -1,
    },
}

fs.mkdirSync(getRootPath());


//核心：自动化思维
//1.创建了文件夹（项目名）
//2.创建index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(inputConfig));
//3.创建了package.json
fs.writeFileSync("./haha/package.json", createPackageJsonTemplate(inputConfig));
//4.安装依赖
// execa("yarn",{
//     cwd:getRootPath(),
//     stdio:[2, 2, 2],
// })

function getRootPath(){
    return "./haha"
}