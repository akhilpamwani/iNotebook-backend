
const express = require('express')
require('dotenv').config({path:'./config.env'})
const connectToMongoose = require('./db')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
connectToMongoose()
app.use('/api/',require('./routes/auth'))
app.use('/api/',require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})