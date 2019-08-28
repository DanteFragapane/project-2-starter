require('dotenv').config()
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const db = require('./db')
const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/api')

const app = express()
const PORT = process.env.PORT || 3030

app
  .engine('handlebars', exphbs({ defaultLayout: 'main' }))
  .set('view engine', 'handlebars')
  .use(db)
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
