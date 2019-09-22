const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./widgets.jsx", // any time you edit this file, re-start webpack
  output: {
    path: path.resolve(__dirname, ""),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  devtool: "source-map"
};

//REMEMBER TO INSTALL LOADERS IN ORDER TO USE NORMALIZE.CSS
//require in entry file
// npm install --save normalize.css
// no need to add anything to index.html (adds normalize by itself)
//add to this file under rules: {
      //   test: /\.css$/,
      //   use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      // }
//npm install --save-dev css-loader 
//npm install --save-dev style-loader 
