require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRoutes = require('./routes/user')

const User = require('./models/User')

const app = express()

mongoose.connect(process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussi !'))
    .catch(error => console.log('Connexion à MongoDB échouée !\n' + error));

const db = mongoose.connection
db.once('open', async () => {
    if (await User.countDocuments().exec() > 0) return

    Promise.all([
        User.create({ id: 1, name: 'User 1' }),
        User.create({ id: 2, name: 'User 2' }),
        User.create({ id: 3, name: 'User 3' }),
        User.create({ id: 4, name: 'User 4' }),
        User.create({ id: 5, name: 'User 5' }),
        User.create({ id: 6, name: 'User 6' }),
        User.create({ id: 7, name: 'User 7' }),
        User.create({ id: 8, name: 'User 8' }),
        User.create({ id: 9, name: 'User 9' }),
        User.create({ id: 10, name: 'User 10' }),
        User.create({ id: 11, name: 'User 11' }),
        User.create({ id: 12, name: 'User 12' })
    ]).then(() => console.log('Added Users'))
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use(bodyParser.json())

app.use('/api/users', userRoutes)

module.exports = app