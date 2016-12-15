require('dotenv').config()

const express = require('express')
const cors = require('cors')
const jwt = require('express-jwt')
const app = express()

app.use(cors({origin: true, credentials: true}))
// protect all
//app.use(jwt({secret: process.env.SECRET }))

app.get('/', (req, res) => {
  res.send({message: 'hello world2'})
})

if (!module.parent) {
  app.listen(process.env.PORT || 4000)
}

module.exports = app
