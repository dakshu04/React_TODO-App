/* eslint-disable no-unused-vars */
 //simple fn that return simple html technically xml but can be assumed as html
 import { useState } from "react";

 //For deployment things-->
//render network for backend
//vercel for frontend

 export function CreateTodo(props) {
     // react-query
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
 
     return <div>
         <input id="title" style={{
             padding: 10,
             margin: 10
         }} type="text" placeholder="title" onChange={function(e) {
             const value = e.target.value;
             setTitle(e.target.value);
         }}></input> <br />
     
         <input id="desc" style={{
             padding: 10,
             margin: 10
         }} type="text" placeholder="description" onChange={function(e) {
             const value = e.target.value;
             setDescription(e.target.value);
         }}></input> <br />
 
         <button style={{
             padding: 10,
             margin: 10
         }} onClick={() => {
         
             fetch("http://localhost:3000/todo", {
                 method: "POST",
                 body: JSON.stringify({
                     title: title,
                     description: description
                 }),
                 headers: {
                     "Content-type": "application/json"
                 }
             })
                 .then(async function(res) {
                     const json = await res.json();
                     alert("Todo added");
                 })
         }}>Add a todo</button>
     </div>
 }
 
//so now we have created in a different file so we have to export it to app.jsx so at the starting use export functio...