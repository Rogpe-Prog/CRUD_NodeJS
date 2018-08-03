const express = require('express')
const control = require('../controllers/controller')

const router = express.Router()
router.get('/', control.index)

module.exports = router