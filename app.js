import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import path from 'path'
import views from 'koa-views'

const app = new Koa()
const router = new Router()

// 静态资源
app.use(serve(path.resolve(__dirname, '/assets')))

// 设置模板引擎
app.use(views(__dirname + '/views', {extension: 'ejs'}))

// body解析
app.use(bodyParser())

// 路由
import user from './routes/user'
app.use(user.routes())

// 404页面
app.use(async(ctx) => {
  if (ctx.status === 404) {
    await ctx.render('error');
  }
})


app.listen(8088)