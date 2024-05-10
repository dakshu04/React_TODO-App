const zod = require("zod");
/* for the 1st one
{   
    title: string,
    description:string,
}
for the third one
{
    id:string
}
 */

const createTodo = zod.object({
    title:zod.string(),
    description:zod.string()
})
const updateTodo = zod.object({
    id: zod.string(),
})

//to export this
module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}