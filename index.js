require('dotenv').config()
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const cookieparser = require('cookie-parser')
const db = require('./db')
const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/api')

const app = express()
const PORT = process.env.PORT || 3030

app
  .engine('handlebars', exphbs({ defaultLayout: 'main' }))
  .set('view engine', 'handlebars')
  .use(db)
  .use(cookieparser())
  // set a cookie
  .use(function (req, res, next) {
    const cookie = req.cookies.cookieName
    // check if client sent cookie
    if (cookie === undefined) {
      // no: set a new cookie
      var randomNumber = Math.random().toString()
      randomNumber = randomNumber.substring(2, randomNumber.length)
      res.cookie('cookieName', randomNumber, { maxAge: 900000, httpOnly: true })
      console.log('cookie created successfully')
    } else {
      // yes, cookie was already present
      console.log('cookie exists', cookie)
    }
    next() // <-- important!
  })
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  .use(htmlRoutes)
  .use(apiRoutes)
  .listen(PORT, () => {
    console.log(`
          oOOOOOo
         ,|    oO
        //|     |
        \\\\|     |
          \`-----\`
          Server Started on http://localhost:${PORT}`)
  })
