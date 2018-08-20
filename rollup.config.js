import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  {
    input: 'main.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'tinyStorage'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      uglify()
    ]
  },
  {
    input: 'main.js',
    output: {
      file: pkg.main,
      format: 'cjs'
    }
  }
];
