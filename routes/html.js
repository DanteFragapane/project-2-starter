const express = require('express')

const router = express.Router()

users = [
  {
    name: 'Dante',
    level: 1
  },
  {
    name: 'Max',
    level: 2
  }
]

router.get('/', (_, res) => {
  res.render('index')
})

module.exports = router
