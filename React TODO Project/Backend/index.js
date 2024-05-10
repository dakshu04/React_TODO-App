// write basic express boilerplate code
// with express.json() middleware

const express = require('express');
const { createTodo,updateTodo } = require('./Types');
const { todo } = require('./db');
const app = express();

app.use(express.json())
const port = 3000;

app.post('/todo', async (req, res) => {
    const createPayload = req.body; //bdoy me se jo request h
    const parsedPayload = createTodo.safeParse(createPayload);  //validation is done using safeParse method and input is createPayload that is basically the information taken from the body of /todo router  In the expression req.body, req refers to the request object, and .body is a property provided by Express.js that holds the parsed request body. The request body typically contains data sent by the client as part of the request, such as form data submitted via a POST request or JSON data sent in the body of an AJAX request.

    if(!parsedPayload.success) {
      res.status(411).json({
        msg:"You sent the wrong inputs"
      });
      return;
    }
    //put it in mongodb
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed:false
    })
    res.json({
      msg:"Todo created"
    })
})

app.get('/todos', async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos
  })
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(updatePayload);

    if(!parsedPayload.success) {
      res.status(411).json({
        msg:"You sent the wrong inputs"
      })
      return;
    }
    await todo.update({
      _id:req.body.id
    },{
      completed:true
    })
    res.json ({
      msg:"Todo marked as completed"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})