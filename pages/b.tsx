import React from 'react'
import { AppContainer } from '../components'

export default () =>
	<AppContainer>
		<div className="hello">
			<style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
				transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
			}
    `}</style>

			<p>Hello World</p>
		</div>
	</AppContainer>
