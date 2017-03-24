import query from '../config/query'

/**
 * 获取用户列表
 * @return {[type]} [description]
 */
export async function getUsers() {
	let res = await query('select * from users')
	return res
}

/**
 * 获取用户列表
 * @return {[type]} [description]
 */
export async function getUser(id) {
	// let res = await query('select * from users where id=$1;', [id])
	let res = await query('select * from users order by $1;', ['name; drop table tmp'])
	return res
}

/**
 * 获取某用户的文章列表
 * @return {[type]} [description]
 */
export async function getArticles(uid) {
	let res = await query('select id,title,content,tag,ctime,etime,stat from b_articles where uid=$1 order by etime desc;', [uid])
	return res
}