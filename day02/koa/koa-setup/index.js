//esm

import fs from 'fs'
import {createIndexTemplate} from "./indexTemplate.js"
import { createPackageJsonTemplate } from './packageJsonTemplate.js'
// import inquirer from 'inquirer'
// import { execa } from 'execa';
import { get } from 'http';


// const answer = await inquirer
//     .prompt([
//         {type:"input", name:"packageName", message:"set package name"},
//         {
//             type:"number",
//             name:"port",
//             message:"set port number",
//             default : ()=> 8080,
//         }
// ]);



const inputConfig = {
    packageName: "haha",
    port:8080,
    middleware: {
        static : true,
        router : true,
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