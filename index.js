const Koa = require('koa')

const app = new Koa()

// app.use()

app.listen(3000,'localhost','',()=>{
  console.log('next app runing...')
})