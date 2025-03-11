const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')







module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
    
      },

      {
        test: /\.(pdf|pptx|docx)$/,
        type: 'asset/resource',
        generator: {
          filename: 'templates-files/[name][ext]'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    

    
//нужно ли это/??
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/templatesfiles', to: 'templatesfiles' }
        ]
      }),
   

    
    //////////

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),


    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'

      } 
    ]),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/page.html',
      filename: 'page.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manual.html',
      filename: 'manual.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/library.html',
      filename: 'library.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/start.html',
      filename: 'start.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/material.html',
      filename: 'material.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/list.html',
      filename: 'list.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/mistakes.html',
      filename: 'mistakes.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/space-using.html',
      filename: 'space-using.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/visual-navigation.html',
      filename: 'visual-navigation.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/grids.html',
      filename: 'grids.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/fonts.html',
      filename: 'fonts.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/colour.html',
      filename: 'colour.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/palette.html',
      filename: 'palette.html',
      chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/manualpages/pictures.html',
      filename: 'pictures.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp1.html',
      filename: 'sp1.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp2.html',
      filename: 'sp2.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp3.html',
      filename: 'sp3.html',
      chunks: ['page']
      }),
      new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp4.html',
      filename: 'sp4.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp5.html',
      filename: 'sp5.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp6.html',
      filename: 'sp6.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp7.html',
      filename: 'sp7.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp8.html',
      filename: 'sp8.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp9.html',
      filename: 'sp9.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp10.html',
      filename: 'sp10.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp11.html',
      filename: 'sp11.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp12.html',
      filename: 'sp12.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp13.html',
      filename: 'sp13.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp14.html',
      filename: 'sp14.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/posterpages/sp15.html',
      filename: 'sp15.html',
      chunks: ['page']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/templates.html',
      filename: 'templates.html',
      chunks: ['page']
    })

  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
