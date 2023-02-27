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

// POST TODO
router.post('/', async (req, res) => {
  //
})

// POST MULTIPLE TODO
router.post('/all', async (req, res) => {
  //
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
