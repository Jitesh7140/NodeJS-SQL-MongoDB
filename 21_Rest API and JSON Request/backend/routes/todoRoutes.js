const express = require('express');
const todorouter = express.Router()

const todoitemController  = require('../controller/todoItemController')
 

 
todorouter.get('/', todoitemController.todoGetController)

todorouter.post('/', todoitemController.todoPostController)
todorouter.delete('/:id', todoitemController.todoDeleteController)
todorouter.put('/:id/complete', todoitemController.todoCompleteController)

exports.todorouter = todorouter 