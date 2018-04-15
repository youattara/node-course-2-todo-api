//mongo client
const {MongoClient, ObjectID} = require('mongodb');

//connect
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to mongo db server');
  }
  //connexion success
  console.log('Connexion success to mongo db server');
  const db = client.db('TodoApp');

  //delete many
  // db.collection('todos')
  // .deleteMany({text: 'Take my kids for swiming pool'})
  // .then((result) => {
  //   console.log(result);
  // });

  //delete one
  // db.collection('todos')
  // .deleteOne({text: 'Go to soccer'})
  // .then((result) => {
  //   console.log(result);
  // });

  //find oen and delete
  db.collection('todos')
  .findOneAndDelete({text: 'Go to soccer'})
  .then((result) => {
    console.log(result);
  });


  //close Connexion
  client.close();
})
