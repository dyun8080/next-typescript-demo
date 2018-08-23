import React from 'react'
import Link from 'next/link'
import { AppContainer } from '../components'
import { Timeline, Card } from 'antd'

const { Meta } = Card

export default class Index extends React.Component<any, any> {
	render() {
		return (
			<AppContainer>
				<h1>Welcome</h1>
				<p>Hello, World</p>

				<div className="example">Hello World, I am being styled using CSS Modules!</div>
				<ul>
					<li><Link href="/about" as="/about"><a>第一个同构项目</a></Link></li>
					<li><Link href="/code" as="/code"><a>一些面试题</a></Link></li>
					<li><Link href="/a" as="/a"><a>a</a></Link></li>
					<li><Link href="/b" as="/b"><a>b</a></Link></li>
				</ul>
				<Timeline>
					<Timeline.Item color="green">
						2018-08-23
						<Card
							hoverable
							bodyStyle={{ padding: 10 }}
							style={{ width: 240, borderRadius: 5, overflow: 'hidden' }}
							cover={<img alt="example" src="/static/images/img01.jpg" />}
						>
							<Meta
								title="新世界より"
								description="1000年后的世界，日本的孩子们正不断地消失，只存在想象中的恐怖动物与人类展开殊死战斗。反乌托邦式的未来超级社会“新世界”，是口吐真言凭藉“咒力”就能移动物体的人类，与有着等同于普通人智力的生物“妖鼠”共存的世界。"
							/>
						</Card>
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
			</AppContainer>
		)
	}
}
