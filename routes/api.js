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
        'INSERT INTO users (username, userpword, charactername, characterlevel, characterxp, charactertype, cookie) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [ req.body.username, hash, req.body.charactername, 1, 0, req.body.charactertype, req.sessionID ],
        (err, data) => {
          if (err) {
            console.error(err)
            return res.status(500).json({ OK: false })
          }
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
        return res.status(500).send(false)
      }
      if (!data[0]) {
        return res.status(401).send(false)
      }
      // Do the comparison for the passwords
      if (req.body.userpword === undefined || req.body.userpword === null) {
        return res.status(401).send(false)
      }
      bcrypt.compare(req.body.userpword, data[0].userpword, (err, bool) => {
        if (err) {
          console.error(err)
          return res.status(500).send(false)
        }
        // Good login
        if (bool) {
          // If they could login, we know that their username is in the table. I don't need to worry about that.
          return req.connection.query(
            'UPDATE users SET cookie = ?  WHERE username = ?',
            [ req.sessionID, req.body.username ],
            (err, data) => {
              // If I couldn't apply cookie in the table, error.
              if (err) {
                console.error(err)
                return res.status(500).send(false)
              }
              if (data.affectedRows === 0) {
                return res.status(500).send(false)
              }
              // If that worked, respond with good login
              return res.status(200).send(true)
            }
          )
        }
        // Bad login
        return res.status(401).send(false)
      })
    })
  })
  .post('/api/attack/:attackName', (req, res) => {
    console.log(req.attackName)
  })
  .post('/api/commitStats', (req, res) => {
    req.connection.query(
      'UPDATE users SET characterlevel = ? characterxp = ?',
      [ req.body.characterlevel, req.body.characterxp ],
      (err, data) => {
        if (err) {
          console.error(err)
          return res.status(500).json({ ok: false })
        }
        if (data.affectedRows !== 0) {
          return res.status(200).json({ ok: true })
        }
        return res.status(500).json({ ok: false })
      }
    )
  })

module.exports = router
