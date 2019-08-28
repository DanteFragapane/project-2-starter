const express = require('express')

// Bcrpyt stuff
const bcrypt = require('bcrypt')
const saltRounds = 12

// Create the router
const router = express.Router()

router
  .post('/user/create', (req, res) => {
    // Do the hash
    return bcrypt.hash(req.body.userpword, saltRounds, (err, hash) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ OK: false })
      }
      // Make the query to create a user
      req.connection.query(
        'INSERT INTO users (username, userpword, charactername) VALUES (?, ?, ?)',
        [ req.body.username, hash, req.body.characterName ],
        (err, data) => {
          if (err) {
            console.error(err)
            return res.status(500).json({ OK: false })
          }
          console.log(data)
          if (data.affectedRows === 1) {
            return res.status(200).json({ OK: true })
          }
          return res.status(500).json({ OK: false })
        }
      )
    })
  })
  .post('/user/login', (req, res) => {
    req.connection.query('SELECT * FROM users WHERE username = ?', req.body.username, (err, data) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ ok: false })
      }
      // Do the compare
      bcrypt.compare(req.body.userpword, data[0].userpword, (err, bool) => {
        if (err) {
          console.error(err)
          return res.status(500).json({ ok: false })
        }
        if (bool) {
          return res.status(200).send(true)
        }
        // FIXME: Find out what the unauthorized status code is!
        return res.status(502).send(false)
      })
    })
  })
  .post('/api/attack/:attackName', (req, res) => {
    console.log(req.attackName)
  })

module.exports = router
