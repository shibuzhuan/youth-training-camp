
import ejs from "ejs";
import fs from "fs";

export function createIndexTemplate(config){
    const template = fs.readFileSync("./template/index.ejs", "utf-8");
    const code = ejs.render(template, {
        router: config.middleware.router,
        static: config.middleware.static,
    });

    console.log(code);
    return code;
}