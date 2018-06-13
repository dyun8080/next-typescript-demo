import React from 'react'
import { AppContainer, CodeBlock, Layout } from '@/components'
import { codeString1, codeString2 } from './code'

const { Content } = Layout

const str = `{
  protocol: 'http',
  host: 'www.xiyanghui.com',
  path: '/product/list',
  query: {
    id: '12345',
    sort: 'discount',
  },
  hash: 'title',
}`

export default class extends React.Component {
  render() {
    return (
      <AppContainer title="next">
        <Content>
          <h1>一些感觉还不错的面试题</h1>
          <h2>用js写一个简单的交通灯功能，10秒绿灯倒数，3秒黄灯倒数，5秒红灯倒数，如何让三个灯不断交替重复？</h2>
          <CodeBlock codeString={codeString1} />
          <h2>请用 javascript 实现一个函数 parseUrl(url)，将一段 url 字符串解析为 Object.</h2>
          <p><strong>{'parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");'}</strong></p>
          <div>{str}</div>
          <CodeBlock codeString={str} />
          <div>代码:</div>
          <CodeBlock codeString={codeString2} />
        </Content>
      </AppContainer>
    )
  }
}


