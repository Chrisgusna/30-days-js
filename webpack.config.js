const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './Day-01/datatypes.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
