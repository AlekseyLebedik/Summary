const isDev = process.env.NODE_ENV === "development";
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const babelOptions = (preset) => {
  const options = {
    presets: [["@babel/preset-env", { targets: "defaults" }]],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };
  if (preset) {
    options.presets.push(preset);
  }
  return options;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (!isDev) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    compress: true,
    historyApiFallback: true,
    port: 8000,
    hot: true,
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    clean: true,
  },
  optimization: optimization(),
  resolve: {
    extensions: [".js", ".ts", ".jsx"],
    alias: {
      "@image-assets": path.resolve(__dirname, "src/assets/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|\/images)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [require.resolve("react-refresh/babel")],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules|\/images)/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-typescript"),
        },
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
        ],
      },

      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: ["file-loader"],
      },

      {
        test: /\.(ttf|wof|wof2|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
};
