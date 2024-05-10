// write basic express boilerplate code
// with express.json() middleware

const express = require('express');
const { createTodo } = require('./Types');
const app = express()
app.use(express.json)
const port = 3000

app.post('/todo', (req, res) => {
    const createPayload = req.body; //bdoy me se jo request h
    const parsedPayload = createTodo.safeParse(createPayload);  //validation is done using safeParse method and input is createPayload that is basically the information taken from the body of /todo router  In the expression req.body, req refers to the request object, and .body is a property provided by Express.js that holds the parsed request body. The request body typically contains data sent by the client as part of the request, such as form data submitted via a POST request or JSON data sent in the body of an AJAX request.

    if(!parsedPayload.success) {
      res.status(411).json({
        msg:"You sent the wrong inputs"
      })
      return;
    }
    //put it in mongodb
})

app.get('/todos', (req, res) => {
  res.send('Hello Ji')
})

app.put('/completed ', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(updatePayload);

    if(!parsedPayload.success) {
      res.status(411).json({
        msg:"You sent the wrong inputs"
      })
      return;
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})