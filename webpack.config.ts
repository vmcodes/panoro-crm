import * as webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { join } from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

let extraPlugins = [];
let extraOptimizations = {};

if (isProduction) {
    const TerserJSPlugin = require('terser-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const CompressionPlugin = require('compression-webpack-plugin');
    const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

    extraPlugins = [
        new CompressionPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ];

    extraOptimizations = {
        minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
    };
} else {
    extraPlugins = [];

    extraPlugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({
            overlay: false,
        })
    );
}

const RootPath = __dirname;

const DefinePluginArgs = {
    'process.env': {
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
    },
};

const plugins = [
    new webpack.DefinePlugin(DefinePluginArgs),
    ...extraPlugins,
    new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
    }),
    new HTMLWebpackPlugin({
        template: join(__dirname, 'src', 'index.ejs'),
        inject: true,
    }),
];

module.exports = {
    name: 'april',
    mode: isProduction ? 'production' : 'development',
    entry: {
        index: [
            process.env.GSP_HOT_RELOAD && 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            join(RootPath, 'src', 'run.tsx'),
        ].filter(Boolean),
    },
    context: join(RootPath, 'src'),
    target: 'web',
    output: {
        path: join(__dirname, 'dist'),
        publicPath: '/',
        chunkFilename: '[name].[contenthash].chunk.js',
        filename: '[name].[fullhash].bundle.js',
    },
    devtool: isProduction ? 'source-map' : 'eval',
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' },
            },
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: [/\.tem\.js$/],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: join(__dirname, 'tmp', 'babel_cache'),
                    ignore: [new RegExp(`node_modules`)],
                    assumptions: {
                        setPublicClassFields: true,
                    },
                    presets: [
                        ['@babel/preset-typescript'],
                        [
                            '@babel/env',
                            {
                                useBuiltIns: 'usage',
                                corejs: 3,
                            },
                        ],
                        '@babel/react',
                    ],
                    plugins: [
                        [
                            'module-resolver',
                            {
                                root: [join(RootPath, 'src')],
                                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                            },
                        ],
                        ['@babel/plugin-syntax-object-rest-spread'],
                        ['@babel/plugin-syntax-dynamic-import'],
                        ['@babel/plugin-syntax-async-generators'],
                        ['@babel/plugin-transform-regenerator'],
                        ['@babel/plugin-proposal-decorators', { legacy: true, loose: true }],
                        ['@babel/plugin-proposal-class-properties'],
                        !isProduction && [require.resolve('react-refresh/babel')],
                    ].filter(Boolean),
                },
            },

            {
                test: /\.scss|.css$/,
                use: [
                    isProduction
                        ? {
                              loader: require('mini-css-extract-plugin').loader,
                              options: {
                                  publicPath: '/',
                              },
                          }
                        : {
                              loader: 'style-loader',
                          },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require.resolve('autoprefixer'),
                                    [require.resolve('tailwindcss'), { config: join(RootPath, 'tailwind.config.ts') }],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {},
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                includePaths: [join(RootPath, 'src')],
                            },
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            icon: true,
                            // replaceAttrValues:
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins,
    optimization: {
        ...extraOptimizations,
    },
    resolve: {
        modules: ['node_modules', join(__dirname, '..')],
        aliasFields: ['browser'],
        alias: {
            buffer: 'buffer',
            util: 'util',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        fallback: {
            assert: false,
            util: false,
            events: false,
            buffer: false,
        },
    },
    externals: {
        fs: '{}',
        tls: '{}',
        net: '{}',
        console: '{}',
        v8: '{}',
    },
    devServer: {
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
};
