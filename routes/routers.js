const express = require('express')
const control = require('../controllers/controller')
const model = require('../models/modelIndex')

const router = express.Router()

router.get('/pessoas', control.index.bind(null, model.models))
router.post('/create', control.createProcess.bind(null, model.models))
router.get('/create', control.createForm)

module.exports = router