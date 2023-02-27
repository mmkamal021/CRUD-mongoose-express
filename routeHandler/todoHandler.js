const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const todoSchema = require('../schemas/todoSchema')
const Todo = new mongoose.model('Todo', todoSchema)

// Get All The TODOS
router.get('/', async (req, res) => {
  //
})

// Get a TODO by id
router.get('/:id', async (req, res) => {
  //
})

// POST A TODO
router.post('/', async (req, res) => {
  const newTodo = new Todo(req.body)
  await newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error!',
      })
    } else {
      res.status(200).json({
        message: 'Todo was insserted successfully!',
      })
    }
  })
})

// POST MULTIPLE TODO
router.post('/all', async (req, res) => {
  await Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error!',
      })
    } else {
      res.status(200).json({
        message: 'Todos were insserted successfully!',
      })
    }
  })
})

// PUT TODO
router.put('/:id', async (req, res) => {
  //
})

// DELETE TODO
router.delete('/:id', async (req, res) => {
  //
})

module.exports = router
