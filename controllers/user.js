import * as User from '../model/user'

// 渲染user页面
export async function index(ctx) {
	await ctx.render('header', {
		title: 'User'
	})
}

/**
 * 获取用户列表
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export async function getUserPage(ctx) {
	ctx.body = await User.getUsers()
}

/**
 * 获取用户
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export async function getUser(ctx) {
	let id = ctx.params.id
	ctx.body = await User.getUser(id)
}

export async function login(ctx) {
	console.log(ctx.request.body)
	ctx.body = {
		page: 'login'
	}
}