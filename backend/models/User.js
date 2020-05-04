const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    id: { type: Number, require: true, unique: true },
    name: { type: String, require: true }
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema)