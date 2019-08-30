const express = require('express')

const router = express.Router()

router
  .get('/', (_, res) => {
    res.render('login')
  })
  .get('/signup', (_, res) => {
    res.render('signup')
  })
  .get('/login', (_, res) => {
    res.render('login')
  })
  .get('/game', (_, res) => {
    res.render('game')
  })

module.exports = router
