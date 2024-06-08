import url from 'postcss-url';
import postcss from 'rollup-plugin-postcss';
import { glob } from 'glob';
import del from 'rollup-plugin-delete';

const configs = glob.sync('src/css/**/*.css').map(file => ({
  input: file,
  output: {
    dir: 'css',
  },
  plugins: [
    postcss({
      inject: false,
      extract: true,
      plugins: [
        url({
          url: "inline",
          maxSize: false,
        }),
      ]
    }),
    del({
      targets: 'css/**/*.js',
      hook: 'writeBundle'
    })
  ]
}));

export default configs;
