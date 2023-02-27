const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const todoSchema = require('../schemas/todoSchema')
const Todo = new mongoose.model('Todo', todoSchema)

// Get All The TODOS
/*
router.get('/', async (req, res) => {
  await Todo.find({ status: 'active' }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error!',
      })
    } else {
      res.status(200).json({
        result: data,
        message: 'Success!',
      })
    }
  })
})
*/

router.get('/', async (req, res) => {
  await Todo.find({ status: 'active' })
    .select({
      _id: 0,
      _v: 0,
      data: 0,
    })
    .limit(2)
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: 'There was a server side error!',
        })
      } else {
        res.status(200).json({
          result: data,
          message: 'Success!',
        })
      }
    })
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
/*
router.put('/:id', async (req, res) => {
  await Todo.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: 'active',
      },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: 'There was a server side error!',
        })
      } else {
        res.status(200).json({
          message: 'Todo was updated successfully!',
        })
      }
    }
  )
})
*/

router.put('/:id', async (req, res) => {
  await Todo.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: 'active',
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: 'There was a server side error!',
        })
      } else {
        res.status(200).json({
          message: 'Todo was updated successfully!',
        })
      }
    }
  )
})

// DELETE TODO
router.delete('/:id', async (req, res) => {
  //
})

module.exports = router
