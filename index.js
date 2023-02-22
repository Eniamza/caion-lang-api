const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hey you have reached the Caion Language API, nothing much')
})

app.post('/submit', (req, res) => {
    res.send('This is the submission API!')
  })

app.listen(port, () => {
  console.log(`Caion God is listening on port ${port}`)
})