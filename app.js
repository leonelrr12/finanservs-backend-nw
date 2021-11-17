const express = require('express')
const cors = require('cors')
const appRoutes = require('./src/routes/appRoutes')
const middleware = require('./src/utils/middleware')
const app = express()

app.use(cors())
app.use(express.static('build'))
app.use('/public', express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api', appRoutes)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app