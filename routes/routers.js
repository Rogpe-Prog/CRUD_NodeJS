const express = require('express')
const control = require('../controllers/controller')
const model = require('../models/modelIndex')

const router = express.Router()

router.get('/', control.index.bind(null, model.models))
router.post('/create', control.createProcess.bind(null, model.models))
router.get('/create', control.createForm)
router.get('/delete/:id', control.deleteOne.bind(null, model.models))

module.exports = router