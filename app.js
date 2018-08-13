const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const routed = require('./routes/routers')
const model = require('./models/modelIndex')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.get('/', (req, res)=> res.render('home'))
app.use('/people', routed)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

model.sequelize.sync().then(()=> {
    app.listen(port, ()=> console.log('Express and DB Online'))
})

