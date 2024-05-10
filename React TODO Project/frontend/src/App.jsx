import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]); //empty array

  // fetch("http://localhost:3000/todos").then(async function(res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // })

  return (
    <div>
       <CreateTodo></CreateTodo> {/*some html tag kind of a thing to create a todo*/}
       <Todos todos={todos}></Todos> {/*some html tag kind of a thing for rendering the todos*/}
    </div>
  )
}

export default App
