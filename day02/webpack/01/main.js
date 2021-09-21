import { foo } from "./foo"
import "./style.css"

const div =document.createElement("div");

div.classList.add("red");

div.innerText = "color";

document.body.append(div);

const state = {
    v:"1",
};

state.v = 2;

console.log(state);

//非js文件不理解，直接报错，需要把他转换成js
//用loader资源转换器来转换




