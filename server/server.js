var express  = require('express');
var bodyParser = require('body-parser');

//local import
var {mongoose}  = require('./db/mongoose.js');
var {Todo}  = require('./model/todo.js');
var {User}  = require('./model/users.js');

//app
var app = express();

//middle-ware
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
   res.send(400).send(e);
 });
})

//listening
app.listen(3000, () => {
  console.log('App Started on port 3000');
});
