const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DIST_DIR = path.resolve(__dirname,'dist');
const SRC_DIR = path.resolve(__dirname,'src');

const config = {
    entry:path.join(SRC_DIR,'/index.js'),
    output:{
        path:DIST_DIR,
        filename:'main.js',
        clean:true
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(SRC_DIR,'/index.html')
        })
      ],
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    mode:'development',
    devtool: 'inline-source-map',
};

module.exports = config;

