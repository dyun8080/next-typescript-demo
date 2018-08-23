/**
 * @see https://github.com/zeit/next.js/tree/canary/examples/custom-server-koa
 * @see https://github.com/zeit/next.js/tree/canary/examples/custom-server-typescript
 */

import * as Koa from 'koa'
import * as next from 'next'
import * as compression from 'compression'
import * as koaConnect from 'koa-connect'
import * as Router from 'koa-router'

const port   = parseInt(process.env.PORT, 10) || 3000
const dev    = process.env.NODE_ENV !== 'production'
const app    = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
	.then(() => {
		const server = new Koa()
		const router = new Router()

    router.get('/a', async ctx => {
			await app.render(ctx.req, ctx.res, '/b', ctx.query)
      ctx.respond = false
    })

    router.get('/b', async ctx => {
      await app.render(ctx.req, ctx.res, '/a', ctx.query)
      ctx.respond = false
    })

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })


		server.use(koaConnect(compression()))

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.use(router.routes())
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
	})
