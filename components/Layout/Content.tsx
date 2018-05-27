import React, { Component } from 'react'
import styled from '@/theme'

class Content extends Component<any, any> {
	render() {
		return (
			<div className={this.props.className}>
				{this.props.children}
			</div>
		)
	}
}

const App = styled(Content)`
	margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
	width: 1000px;
	.text {
		/* margin */
	}
`

export default App
