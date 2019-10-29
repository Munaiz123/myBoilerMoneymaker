const express = require('express')
const path = require('path')

const morgan = require('morgan')
const bodyParser = require('body-parser')


const app = express();

app.use(morgan('dev'))

//body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//static middleware
app.use(express.static(path.join(__dirname,"../public")))

app.use('/api', require('./api')) // the routes

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
// app.listen(port, function () {
//   console.log(`Express server is listening on port ${port}`);
// });



module.exports = app
