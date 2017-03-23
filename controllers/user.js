
export async function index(ctx) {
	await ctx.render('header', {
		title: 'User'
	})
}

export async function getUserPage(ctx) {
	ctx.body = [
		{
			id: 1,
			name: 'koa'
		},
		{
			id: 2,
			name: 'koa2'
		}
	]
}

export async function login(ctx) {
	console.log(ctx.request.body)
	ctx.body = {
		page: 'login'
	}
}