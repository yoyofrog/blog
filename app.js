const express = require('express')
const path = require('path')
const admin = require('./route/admin')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname,'views'))
app.set('view engine','html')

app.use('/admin', admin)


app.listen(3000, function () {
    console.log('server is running 3000')
})
