const User = require('../models/User')

exports.getAllUsers = User

exports.pagination = (req, res, next) => {
    res.status(200).json(res.paginatedResults)
}