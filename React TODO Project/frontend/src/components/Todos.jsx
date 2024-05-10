/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */  

    //to render all the todos the things
    //for dynamically you need to take all the todos as an input you can use props variable(google it down) or 
    //more modern syntax to do this object destructuring Todos{todos} - give me all the todos whoever is rendering this
    //please pass me all the todos as an input where todos will be an array that looks like this ->
    /*{
        title:"go to gym",
        description:"go to gym"
    }*//* iterate to all the todos and map it to next(which is on the next line) specific div */
/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo) {
                return <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
                    </div>
            })}
        </div>
    );
}
