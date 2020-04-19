const expres = require('express')
const mongoose = require('mongoose')

const cars = require('./routes/cars')

const app = expres()
const PORT = process.env.PORT || 3333

mongoose.connect('mongodb://localhost/shoppingcar', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(expres.json())
app.use(cars)
app.set('PORT', PORT)

module.exports = app