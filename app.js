const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes/linkroutes')

mongoose.connect('mongodb://localhost/blog', (error, db)=>{
    console.log(error)
    console.log(db)
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))

app.use('/', routes)

app.listen(3000, ()=>{
    console.log('Server Running')
})