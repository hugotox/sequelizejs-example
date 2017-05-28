const express = require('express');
const router = express.Router();
const api = require('../api')

// todos routes
router.get   ('/todos', api.todos.list);
router.post  ('/todos', api.todos.create);
router.get   ('/todos/:todoId', api.todos.get);
router.patch ('/todos/:todoId', api.todos.update);
router.delete('/todos/:todoId', api.todos.delete);

// todoItems routes
router.post  ('/todos/:todoId/items/:todoItemId', api.todoItems.create);
router.patch ('/todos/:todoId/items/:todoItemId', api.todoItems.update);
router.delete('/todos/:todoId/items/:todoItemId', api.todoItems.delete);

module.exports = router;
