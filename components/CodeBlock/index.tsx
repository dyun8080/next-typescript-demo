import React from 'react'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import prism from 'react-syntax-highlighter/styles/prism/atom-dark'

registerLanguage('jsx', jsx)

const CodeBlock = ({ codeString }) => {
	return (
		<SyntaxHighlighter
			codeTagProps={{ style: { tabSize: 2 } }}
			language="jsx"
			style={prism}>
			{codeString}
		</SyntaxHighlighter>
	)
}

export default CodeBlock
