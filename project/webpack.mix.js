const mix = require('laravel-mix')
const styleLintPlugin = require('stylelint-webpack-plugin')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/components/Pages/Top/app.js', 'public/js/top')
  .sass('resources/sass/app.scss', 'public/css')

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new styleLintPlugin({
      files: ['./resources/js/components/**/*.vue'],
      // eslint-disable-next-line no-undef
      configFile: path.join(__dirname, '.stylelintrc.js'),
      options: {
        fix: false
      }
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre', // preを指定することで、付いてないローダーより先に実行できる。
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: false // Lint実行時に自動整形を行うかどうか。（prettierのルールで自動整形してくれる）
        }
      }
    ]
  }
})
