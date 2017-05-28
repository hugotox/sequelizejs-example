const Todo = require('../models').Todo
const TodoItem = require('../models').TodoItem

module.exports = {
  create(req, res) {
    return Todo.create({
      title: req.body.title
    })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error))
  },

  list(req, res) {
    return Todo.all({
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }]
    })
      .then(todo => res.status(200).send(todo))
      .catch(error => res.status(400).send(error))
  },

  get(req, res) {
    return Todo.findById(req.params.todoId, {
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }]
    })
      .then(todo => {
        if (todo) {
          res.status(200).send(todo)
        } else {
          res.status(404).send({
            message: 'Todo Not Found',
          })
        }
      })
      .catch(error => res.status(400).send(error))
  },

  update(req, res) {
    return Todo.findById(req.params.todoId, {
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }]
    })
      .then(todo => {
        if (!todo) {
          res.status(404).send({
            message: 'Todo Not Found',
          })
        }
        return todo.update({
          title: req.body.title || todo.title
        })
          .then(todo => res.status(200).send(todo))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },

  delete(req, res) {
    return Todo.findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'TODO not found'
          })
        }
        return todo.destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}