const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const routed = require('./routes/routers')
const model = require('./models/modelIndex')

app.get('/', (req, res)=> res.render('home'))
app.get('/pessoas', routed)

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

model.sequelize.sync().then(()=> {
    app.listen(port, ()=> console.log('Express and DB Online'))
})

