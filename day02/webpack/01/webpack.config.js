const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode:"development",
    entry:"./main.js",
    output :{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean:true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "Output Management",
        })
    ],
    devServer:{
        static:"./dist",
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                //.css -> .js
                //从后往前执行
                use:["style-loader","css-loader"],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:"asset/resource",
            },
            {
                test:/\.json5$/i,
                type:"json",
                parser :{
                    parse :json5.parse,
                }
            }
        ],
    },
};

// css-loader
//webpack -> require("css-loader") -> (node_modules)