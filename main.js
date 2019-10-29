const {db} = require('./server/db')

const app = require('./server')



const port = process.env.PORT || 3000;

db.sync()
.then(()=>{
  console.log('Wolverine synced')
  app.listen(port,()=>{
    console.log(`listening on ${port}`)
  })
})
