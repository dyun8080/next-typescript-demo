import React from 'react'
import { AppContainer } from '@/components'
import { Button } from 'antd'

export default () =>
	<AppContainer title="嘻嘻">
		<div>
			sdfsjhdfkshdj11sd11hfk
			<Button type="primary" onClick={() => { console.log(123) }}>按钮</Button>
		</div>
	</AppContainer>
