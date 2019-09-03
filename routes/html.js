const express = require('express')

const router = express.Router()

router
  .get('/', (_, res) => {
    res.render('login')
  })
  .get('/signup', (_, res) => {
    res.render('signup')
  })
  .get('/game', (_, res) => {
    if (_.session && _.sessionID) {
      _.connection.query(
        'SELECT charactername, characterlevel, characterxp, charactertype FROM users WHERE cookie = ?',
        _.sessionID,
        (err, data) => {
          if (err) {
            console.error(err)
            return res.status(500).json({ ok: false })
          }
          console.log(data[0])
          res.render('game', { player: data[0] })
        }
      )
    }
    return res.status(401).json({ ok: false })
  })

module.exports = router
