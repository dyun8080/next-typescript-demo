import React from 'react'
import Link from 'next/link'
import { AppContainer } from '../components'
import { Timeline, Button } from 'antd'
import '../style.less'

import styled from '../theme'

interface SectionProps {
	// see https://github.com/Microsoft/TypeScript/issues/8588
	children?: React.ReactChild
	className?: string
	color?: string
}

class Damao extends React.Component<SectionProps, {}> {
	render() {
		return (
			<div className={this.props.className}>
				{this.props.children}
				<div>div</div>

				<section>
					pppppp
				<div>12313123</div>
				</section>
			</div>
		)
	}
}

const StyledDamao = styled(Damao) `
	color: red;
	> div {
		color: ${props => props.color ? props.color : props.theme.primaryColor};
	}
	p {
		color: ${props => props.theme.primaryColor};
		font-size: 32px;
	}
`


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

				<StyledDamao color={this.state.color}>大毛</StyledDamao>

				<Button onClick={() => { this.setState({ color: 'green' }) }}>onChange data color</Button>

				<div className="example">Hello World, I am being styled using CSS Modules!</div>
				<ul>
					<li><Link href="/a" as="/a"><a>a</a></Link></li>
					<li><Link href="/b" as="/b"><a>b</a></Link></li>
					<li><Link href="/c" as="/c"><a>c</a></Link></li>
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
