require('dotenv').config()
const mongoose = require('mongoose')
const mongoUri = process.env.MONGODB_URL
mongoose
    .connect(mongoUri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
