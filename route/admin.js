const express = require('express')

const admin = express.Router()

admin.get('/', (req, res) => {
    res.redirect('/admin/login')
})

admin.get('/login', (req, res) => {
    res.render('login')
})

admin.get('/user', (req, res) => {
    res.render('admin/user')
})

module.exports = admin