const express = require('express')

const router = express.Router()

router.get('/setcookie', (_, res) => {})

router.get('/', (_, res) => {
  res.render('index', { cookie: _.cookies.cookieName })
})

module.exports = router
