const withTypescript = require('@zeit/next-typescript')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withLESS = require('@zeit/next-less')

const { ANALYZE } = process.env

module.exports = withTypescript({
	webpack: withLESS({
		cssModules: false,
		webpack: function (config, { dev, isServer }) {
			config.node = {
				fs: 'empty'
			}

			if (ANALYZE) {
				config.plugins.push(new BundleAnalyzerPlugin({
					analyzerMode: 'server',
					analyzerPort: isServer ? 8888 : 8889,
					openAnalyzer: true
				}))
			}
			return config
		}
	}).webpack
})
