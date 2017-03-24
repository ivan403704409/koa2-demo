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