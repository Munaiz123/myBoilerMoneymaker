const {db} = require('./server/db')

const app = require('./server')
console.log(app)

const port = process.env.PORT || 3000;

db.sync()
.then(()=>{
  console.log('db synced')
  app.listen(port,()=>{
    console.log(`listening on ${port}`)
  })
})
