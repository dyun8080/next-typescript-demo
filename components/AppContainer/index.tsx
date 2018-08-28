import React from 'react'
import NextHead from 'next/head'
import NProgress from 'nprogress'
import Router, { withRouter } from 'next/router'
import '@/theme/classes.less'

Router.onRouteChangeStart = (url) => {
	console.log(`Loading: ${url}`)
	NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

interface AppContainerProps {
	// router: SingletonRouter
	children?: React.ReactNode
	title?: string
}

const AppContainer = (props: AppContainerProps) => {
	return (
		<div style={{ padding: 20 }}>
			<NextHead>
				<title>{props.title}(#^.^#)</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
				<link rel="apple-touch-icon" href="/static/touch-icon.png" />
				<link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
				<link rel="icon" href="/static/favicon.ico" />
				{/* Import CSS for nprogress */}
				<link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
				<link rel="stylesheet" href="/_next/static/style.css" />

				{/* <meta property="og:url" content={props.url || defaultOGURL} />
				<meta property="og:title" content={props.title || ''} />
				<meta property="og:description" content={props.description || defaultDescription} />
				<meta name="twitter:site" content={props.url || defaultOGURL} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
				<meta property="og:image" content={props.ogImage || defaultOGImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" /> */}
			</NextHead>
			{props.children}
		</div>
	)
}

export default withRouter((props: any) => <AppContainer {...props} />)
