import React from 'react'
import { AppContainer } from '@/components'
import { Content } from '@/components/Layout'
import { Timeline } from 'antd'

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import prism from 'react-syntax-highlighter/styles/prism/atom-dark'

registerLanguage('jsx', jsx)

const Component = ({ codeString }) => {
	// 	const codeString = `import Document, { Head, Main, NextScript } from 'next/document'
	// import { ServerStyleSheet } from 'styled-components'

	// export default class MyDocument extends Document {
	//   static getInitialProps ({ renderPage }) {
	//     const sheet = new ServerStyleSheet()
	//     const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
	//     const styleTags = sheet.getStyleElement()
	//     return { ...page, styleTags }
	//   }

	//   render () {
	//     return (
	//       <html>
	//         <Head>
	//           {this.props.styleTags}
	//         </Head>
	//         <body>
	//           <Main />
	//           <NextScript />
	//         </body>
	//       </html>
	//     )
	//   }
	// }`
	return <SyntaxHighlighter language="jsx" style={prism}>{codeString}</SyntaxHighlighter>
}


export default class extends React.Component {
	static getInitialProps(ctx) {
		return { query: typeof ctx.query === 'string' ? ctx.query : ' ' }
	}



	render() {
		return (
			<AppContainer title="嘻嘻">
				<Content>
					<h1>Next 入坑杂谈——写给与我一样的萌新们</h1>
					<p className="text-color">真是没想到，第一篇技术文章会发布在我的个人博客里~</p>
					<Component codeString={this.props.query} />
					<Timeline>
						<Timeline.Item>
							<p>2018-05-22</p>
							<p>
								作为已经精通这React技术体系，并且有长达两年的后台应用开发经验的你来说，独立从零开始搭建同构应用，是否会有压力呢？
						</p>
							<div style={{ textAlign: 'center' }}>
								<img style={{ marginBottom: 10 }} src="/static/xiaomao.jpg" alt="xiaomao" />
								<p>必胜</p>
							</div>
							<div>
								<p>在新安装的Linux系统下，vsode出现eslint（tslint）无效的情况。</p>
								<p>问题大概是因为在node9.X版本下的eslint包，在node10.X中无效。</p>
								<p>删除node_modules重新下载就OK了。（有点莫名其妙的感觉）</p>
							</div>
							<a>总结：npm会根据node版本依赖下载node_modules</a>
						</Timeline.Item>
						<Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
						<Timeline.Item color="red">
							<p>Solve initial network problems 1</p>
							<p>Solve initial network problems 2</p>
							<p>Solve initial network problems 3 2015-09-01</p>
						</Timeline.Item>
						<Timeline.Item>
							<p>Technical testing 1</p>
							<p>Technical testing 2</p>
							<p>Technical testing 3 2015-09-01</p>
						</Timeline.Item>
					</Timeline>
				</Content>
			</AppContainer>
		)
	}
}


