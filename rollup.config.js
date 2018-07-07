import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: './elements.js',
    output: [
        {
            format: 'iife',
            file: 'elements.iife.js',
            sourceMap: true,
        }
    ],

    plugins: [
        resolve({browser: true}),
        commonjs(),
    ],
}]
