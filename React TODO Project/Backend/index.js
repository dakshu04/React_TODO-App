// write basic express boilerplate code
// with express.json() middleware

const express = require('express');
const app = express()
app.use(express.json)
const port = 3000

app.post('/todo', (req, res) => {

})

app.get('/todos', (req, res) => {
  res.send('Hello Ji')
})

app.put('/completed ', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})