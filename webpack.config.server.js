const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
const nodeExternals = require('webpack-node-externals')

const config = {
    name: "sever",
    entry: [path.join(CURRENT_WORKING_DIR, './server/server.js')],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: "sever.generated.js",
        publicPath: "/dist/",
        libraryTarget: "commontjs2"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}

module.exports = config