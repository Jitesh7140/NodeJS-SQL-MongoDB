const Todo = require('../model/todos')

exports.todoPostController = async (req, res, next) => {
     
        console.log(req.body)
        const todoItems = new Todo(req.body)
        const items = await todoItems.save()
        res.status(200).json(items)
      
} 

exports.todoGetController = async (req, res, next) => {
     
        const todoItems = await Todo.find()
        res.status(200).json(todoItems)

      
} 


exports.todoDeleteController = async (req, res, next) => {
        const id = req.params.id
        await Todo.findByIdAndDelete(id)
        const todoItems = await Todo.find()
        res.status(204).send()

      
} 



exports.todoCompleteController = async (req, res, next) => {
     const id = req.params.id
        const todoItem = await Todo.findById(id)
        if (!todoItem) {
            return res.status(404).json({ message: 'Todo item not found' })
        }
        todoItem.complete = true
        await todoItem.save()
        res.status(200).json(todoItem)
} 


