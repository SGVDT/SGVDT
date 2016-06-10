module.exports = {
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
  // module: {
  //   loaders: [
  //           { test: /\.css$/, loader: 'style!css!' }
  //   ]
  // }
};
