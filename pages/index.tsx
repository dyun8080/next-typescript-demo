import React from 'react'
import Link from 'next/link'
import { AppContainer } from '../components'
import { Timeline, Button } from 'antd'


export default class Index extends React.Component<any, any> {
	state = {
		color: '',
	}

	render() {
		const { name } = this.props
		return (
			<AppContainer>
				<h1>Home Page</h1>
				<p>Welcome, {name}</p>

				<div className="example">Hello World, I am being styled using CSS Modules!</div>
				<ul>
					<li><Link href="/about" as="/about"><a>第一个同构项目</a></Link></li>
					<li><Link href="/a" as="/a"><a>a</a></Link></li>
					<li><Link href="/b" as="/b"><a>b</a></Link></li>
				</ul>

				<Timeline>
					<Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
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
			</AppContainer>
		)
	}
}
