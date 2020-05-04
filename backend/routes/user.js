const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user')
const paginated = require('../middlewares/paginated')

router.get('/', paginated(userCtrl.getAllUsers), userCtrl.pagination)

module.exports = router