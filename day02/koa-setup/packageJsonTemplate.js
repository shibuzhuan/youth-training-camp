
import ejs from "ejs";
import fs from "fs";

export function createPackageJsonTemplate(config){
    const template = fs.readFileSync("./template/package.ejs", "utf-8");
    const code = ejs.render(template, {
        packageName: config.packageName,
        static: config.middleware.static,
        router: config.middleware.router,
    });

    console.log(code);
    return code;
}