const path = require('path');

module.exports = {
    entry: './src/index.js', //punto de entrada de nuestra aplicacion 
    output: {
        filename: bundle.js, //nombre del archivo de salida
        path:path.resolve(__dirname,'dist'),//carpeta de salida
    },
    module:{
        rules: [
            {
                test: /\.css$/, //regex para identificar archivos css
                 use:['style.loader','css-loader'],//loaders para identificar archivos
            },
            {
                test: /\.js$/, //regex para identificar archivos js
                exclude: /node_modules/, //excluir la carpeta node modules
                use: {
                    loader: 'babel-loader',//loader para pasar nuestro Js moderno a JS mas antiguo para todos los navegadores
                    option: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //generar sorcemaps para facilitar  la depuracion 
    devserver:{
        contentBase: path.resolve(__dirname, 'dist'),//carpeta principal del servidor
        compress: true, //habilitar la compresion 
        port:9000, //puerto del servidor del desarrollo 
    },
};