/**
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-webpack-bundle-analyzer
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-ant-design-less
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-typescript
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-styled-components
 */

'use strict'

const fs 											 = require('fs')
const path 										 = require('path')
const lessToJs 								 = require('less-vars-to-js')
const withLESS 								 = require('@zeit/next-less')
const withTypescript           = require('@zeit/next-typescript')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE } 				     = process.env
const modifyVars 							 = lessToJs(fs.readFileSync(path.join(__dirname, './theme/antd.less'), 'utf8'))

// fabric.

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
	require.extensions['.less'] = (file) => { }
}

module.exports = withTypescript({
	webpack: withLESS({
		cssModules: false,
		lessLoaderOptions: {
			javascriptEnabled: true,
			modifyVars,
		},
		webpack: (config, { dev, isServer }) => {
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
