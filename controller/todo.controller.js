const asyncHandler = require("express-async-handler")
const todo = require("../modals/todo")


exports.getAllTodos = asyncHandler(async (req, res) => {
    const result = await todo.find()
    res.json({ message: "Todo Fetch Success", result })
})

exports.addTodos = asyncHandler(async (req, res) => {
    await todo.create(req.body)
    res.json({ message: "Todo add Success" })
})

exports.updateTodo = asyncHandler(async (req, res) => {
    await todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo update Success" })
})

exports.deleteTodo = asyncHandler(async (req, res) => {
    await todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo delete Success" })
})



//    https://github.com/yogesh7721/mobile-todo-server.git 

//   
// git init
// git remote add origin GIT_CHA_URL

// git add .
// git commit -m "initial setup"
 
//  git push origin master