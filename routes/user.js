import Router from 'koa-router'
import * as User from '../controllers/user'

const router = new Router({
	prefix: '/user',
})

router
	.get('/', User.index)
	.get('/list/:id', User.getUserPage)
	.post('/login', User.login)


export default router