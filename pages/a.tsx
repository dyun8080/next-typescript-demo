import React from 'react'
import { AppContainer } from '../components'
import styles from '../style2.less'

export default () =>
	<AppContainer>
		<div className={styles.hello}>
			sdfsjhdfkshdj11sd11hfk
			<button onClick={() => { console.log(123) }}>按钮</button>
		</div>
	</AppContainer>

