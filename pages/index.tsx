import React from 'react'
import Link from 'next/link'
import { AppContainer } from '../components'
import css from '../style.less'

export default class Index extends React.Component<any, any> {
	render() {
		const { name } = this.props
		return (
			<AppContainer>
				<h1>Home Page</h1>
				<p>Welcome, {name}</p>
				<div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
				<ul>
					<li><Link href="/a" as="/a"><a>a</a></Link></li>
					<li><Link href="/b" as="/b"><a>b</a></Link></li>
					<li><Link href="/c" as="/c"><a>c</a></Link></li>
				</ul>
			</AppContainer>
		)
	}
}
