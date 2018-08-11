const express = require('express')
const control = require('../controllers/controller')
const model = require('../models/modelIndex')

const router = express.Router()
router.use('/pessoas', control.index.bind(null, model.models))

module.exports = router