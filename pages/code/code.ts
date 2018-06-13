
// 用js写一个简单的交通灯功能，10秒绿灯倒数，3秒黄灯倒数，5秒红灯倒数，如何让三个灯不断交替重复？
const codeString1 = `const controller = (time, cb) =>
	new Promise(resolve => {
		setTimeout(() => {
			cb()
			resolve()
		}, time)
	})

const start = async () => {
	await controller(10000, () => console.log('绿灯: 10s'))
	await controller(5000, () => console.log('黄灯: 5s'))
	await controller(3000, () => console.log('红灯: 3s'))

	start()
}

start()`

// 请用 javascript 实现一个函数 parseUrl(url)，将一段 url 字符串解析为 Object.
const codeString2 = `
  const parseUrl = (urlString: string) => {
	const protocolIndex = urlString.indexOf('://')
	const url = urlString.substring(protocolIndex + '://'.length)

	const protocol = urlString.substring(0, urlString.indexOf('://'))
	const host = url.substring(0, url.indexOf('/'))
	const path = url.includes('?') ? url.substring(url.indexOf('/'), url.indexOf('?')) : null

	const hash = url.substring(url.indexOf('#') + 1)

	const _parseQuery = (query: string) => {

		const reg = /([^=&\s]+)[=\s]*([^&\s]*)/g
		const obj = {}
		while (reg.exec(query)) {
			obj[RegExp.$1] = RegExp.$2
		}
		return obj
	}

	const query = url.includes('?')
		?
    url.includes('#') 
      ? _parseQuery(url.substring(url.indexOf('?') + 1, url.indexOf('#'))) 
      : _parseQuery(url.substring(url.indexOf('?') + 1))
		:
		{}

	return {
		protocol,
		host,
		path,
		query,
		hash,
	}
}`


export {
  codeString1,
  codeString2,
}
