var glob = require("glob");

function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
      }
    },
  ];
}

module.exports = [
  {
    entry: glob.sync("./assets/style/*.scss"),
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-app.js',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: getStyleUse('app.css')
      }]
    },
  },
  {
    entry: glob.sync("./assets/scripts/*.js"),
    output: {
      filename: "bundle-home.js"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }
];
