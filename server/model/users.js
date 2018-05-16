var mongoose  = require('mongoose');
//user model
var User  = mongoose.model('User', {
  name:{
    type: String,
    required: true,
    trim: true,
  },
  gender:{
    type: String,
    required: true,
    minlenght: 1,
    default: 'M'
  },
  email: {
    type: String,
    required: true,
    minlenght: 1,
    default: 'email@domain.com',
    trim: true
  }
});

//export
module.exports = {
  User
};
