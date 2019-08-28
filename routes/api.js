const express = require('express')

// Bcrpyt stuff
const bcrypt = require('bcrypt')
const saltRounds = 12

// Create the router
const router = express.Router()

router
  .post('/user/create', (req, res) => {
    // Do the hash
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) console.error(err)
      // Make the query to create a user
      req.connection.query(
        'INSERT INTO users VALUES ?',
        [ req.body.username, hash, req.body.characterName ],
        (err, data) => {
          if (err) console.error(err)
          if (data.affectedRows !== 0) {
            return res.status(200)
          }
          return res.status(500)
        }
      )
    })
  })
  .post('/api/attack/:attackName', (req, res) => {
    console.log(req.attackName)
  })

module.exports = router
