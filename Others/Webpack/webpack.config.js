const path = require('path');
const resolve = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: [resolvePath('./src/main.js')]
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: isProd ? resolvePath('../static') : resolvePath('static'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolvePath('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) && !/\.vue\.js/.test(file)
        ),
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader'
      },
      {
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new VueLoader(),
    new HtmlWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};