const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProductionMode = process.env.NODE_ENV === 'production';

module.exports = {
	mode: isProductionMode ? 'production' : 'development',
	plugins: [
		new HtmlWebpackPlugin({
			minify: true,
		}),
		new MiniCssExtractPlugin({
			filename: isProductionMode ? '[name].[contenthash].css' : '[name].css',
		}),
	],
	entry: {
		index: './index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		chunkLoading: false,
		wasmLoading: false,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											// Options
										},
									],
								],
							},
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					minimize: true,
				},
			},
		],
	},
};
