const express = require('express')
const connectToMongoose = require('./db')
const app = express()
const port = 8000

app.use(express.json())
connectToMongoose()
app.use('/api/',require('./routes/auth'))
app.use('/api/',require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})