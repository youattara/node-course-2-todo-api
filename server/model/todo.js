var mongoose  = require('mongoose');

//todo model
var Todo = mongoose.model('Todos', {
  text:{
    type: String,
    required: true,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

//export
module.exports = {
  Todo
};
