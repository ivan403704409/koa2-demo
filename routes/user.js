import Router from 'koa-router'
import * as User from '../controllers/user'

const router = new Router({
	prefix: '/user',
})

router
	.get('/', User.index)
	.get('/:id', User.getUser)
	// .get('/list', User.getUserPage)
	.post('/login', User.login)
	.get('/:uid/articles', User.renderArticles)


export default router