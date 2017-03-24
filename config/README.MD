# [pg自带了sql仿注入功能]url(https://github.com/brianc/node-postgres/wiki/FAQ)
pg sql使用如下格式查询，不要只用query(sql)的形式，因为这样没有sql防注入功能
> query(string queryText, array values)