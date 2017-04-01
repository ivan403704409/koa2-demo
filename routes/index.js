import Router from 'koa-router'
import * as Home from '../controllers/index'

const router = new Router()

router
	.get('/', Home.index)

export default router