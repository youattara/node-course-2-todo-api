var express  = require('express');
var bodyParser = require('body-parser');

//local import
var {mongoose}  = require('./db/mongoose.js');
var {Todo}  = require('./model/todo.js');
var {User}  = require('./model/users.js');

//app
var app = express();

//middle-ware body parser
app.use(bodyParser.json());

//post
app.post('/todos', (req, res) => {
 var todo  = new Todo ({
   text: req.body.text
 });

  //save todo
  todo.save().then((doc) =>{
   res.send(doc);
  }, (e) => {
   res.sendStatus(400).send(e);
 });
})

//get todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }).catch((e) => {
    done(e);
  });
})

//listening
app.listen(3000, () => {
  console.log('App Started on port 3000');
});

module.exports = {
  app
};
