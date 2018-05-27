import React from 'react'
import { AppContainer, Modal } from '../components'
import { Alert } from 'antd'

export default class extends React.Component {

	componentDidMount() {

		if (typeof window !== 'undefined') {
			const G6 = require('@antv/g6')
			// 第三步：设置数据
			const data = {
				'nodes': [
					{
						'x': 140,
						'y': 210,
						'id': 'node1',
					},
					{
						'x': 270,
						'y': 210,
						'id': 'node2',
					},
				],
				'edges': [
					{
						'source': 'node1',
						'id': 'edge1',
						'target': 'node2',
					},
				],
			}
			// 第四步：配置G6画布
			const net = new G6.Net({
				id: 'c1',      // 容器ID
				width: 500,    // 画布宽
				height: 500,    // 画布高
			})
			// 第五步：载入数据
			net.source(data.nodes, data.edges)
			// 第六步：渲染关系图
			net.render()
		}

	}


	render() {
		return (
			<AppContainer>
				<div id="c1"></div>
				<Alert
					style={{ marginTop: 50 }}
					message="Success Tips"
					description="Detailed description and advices about successful copywriting."
					type="success"
					showIcon
				/>
				<Modal />
			</AppContainer>
		)
	}
}
