const fs = require('fs')
const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withLESS = require('@zeit/next-less')
const lessToJs = require('less-vars-to-js')

const { ANALYZE } = process.env

const modifyVars = lessToJs(fs.readFileSync(path.join(__dirname, './theme.less'), 'utf8'))


// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withTypescript({
	webpack: withLESS({
		cssModules: false,
		lessLoaderOptions: {
			javascriptEnabled: true,
			modifyVars
		},
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
			// console.log(config.module.rules)

			return config
		}
	}).webpack
})
