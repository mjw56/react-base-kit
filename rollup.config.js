var babel = require('rollup-plugin-babel');
var commonjs = require('rollup-plugin-commonjs');
var resolve = require('rollup-plugin-node-resolve');
var replace = require('rollup-plugin-replace');
var uglify = require('rollup-plugin-uglify');

var config = {
    input: 'main.js',
    output: {
        file: 'build.js',
        format: 'cjs'
    },
    plugins: [
        babel({
            babelrc: false,
            presets: [ [ 'es2015', { modules: false } ],  'react' ],
        }),
        resolve({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'production' )
        }),
        uglify()
    ]
};

module.exports = config;