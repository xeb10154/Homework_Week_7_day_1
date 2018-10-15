const config = {
  entry: `${__dirname}/src/app`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public/js`
    // The above interpolation (__dirname) is equivalent to ./public/js, however this format doesn't work for some strange reason.
  },
  mode: 'development'
};

module.exports = config;
