const mongoose = requuire('mongoose')

const todoSchema = mongoose.Schema({
  title: {
    ntype: String,
    required: true,
  },
  description: String,
  status: {
    type: Sting,
    enum: ['active', 'inactive'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = todoSchema
