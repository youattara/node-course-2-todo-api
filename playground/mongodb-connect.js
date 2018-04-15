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

  //insert one
  // db.collection('todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     console.log('Unable to insert data', err);
  //   }
  //
  //   //insert success
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  //insert user collection
  db.collection('Users').insertOne({
    name: 'Yacouba Ouattara',
    age: 37,
    location: 'Montreal'
  }, (err, result) => {
    if(err){
      console.log('Unable to insert data', err);
    }

    //insert success
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  //close Connexion
  client.close();
})
