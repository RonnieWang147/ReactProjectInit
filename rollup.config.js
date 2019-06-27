import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { string } from 'rollup-plugin-string';

const dist = 'dist';
const bundle = 'bundle';

const production = !process.env.ROLLUP_WATCH;
export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm',
    },
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs',
    },
    {
      name: 'myComponent',
      file: `${dist}/${bundle}.umd.js`,
      globals: {
        react: 'React',
      },
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    string({
      include: '**/*.css',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    production && terser(),
  ],
};
