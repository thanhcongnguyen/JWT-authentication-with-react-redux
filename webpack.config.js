module.exports = {
  entry: './src/index.js',
  output: {
    path:__dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader:'babel-loader',
        query:{
          presets:['react', 'es2015', 'stage-0']// cai dat de doc dc syntax JSX trong ReactJS, syntax es2015
        },
        test:/\.js?$/,
        exclude: /node_modules/
      },
       {
         test: /\.css$/,
         loaders: [ 'style-loader', 'css-loader' ]// add file css vao bundle
       }
    ]
  }
}
