const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const routed = require('./routes/routers')

//app.get('/', (req, res)=> res.render('home'))

app.use('/', routed)

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port, ()=> console.log('Online on port: ', port))
