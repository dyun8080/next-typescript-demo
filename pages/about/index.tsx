import React from 'react'
import { AppContainer, CodeBlock, Layout } from '@/components'
import { Timeline } from 'antd'
import { codeString } from './code'

const { Content } = Layout

export default class extends React.Component {
	render() {
		return (
			<AppContainer title="next">
				<Content>
					<h1>Next 入坑杂谈——写给与我一样的萌新们</h1>
					<p className="text-color">真是没想到，第一篇技术文章会发布在我的个人博客里~</p>
					<CodeBlock codeString={codeString} />
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
							<p>两年前的今天，从写下第一行代码，从选择这份职业，这是我唯一没有犹豫的选择</p>
							<p>你是芳禾引以为傲的前端。永远不要忘了那份初心。---芳禾。小云</p>
						</Timeline.Item>
					</Timeline>
				</Content>
			</AppContainer>
		)
	}
}


