const express = require('express')
const app = express()
const port = 3001

app.get('/home', (req, res) => {
  res.send('hello from minh')
})

app.listen(port, () => console.log(`running app on ${port}`))
