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

  //find docs
  // db.collection('todos').find({
  //   _id: new ObjectID('5ad2bc7d9464dc3670c0c460')
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to find data', err)
  // })

  //find Users
  db.collection('Users').find({
    location: 'Montreal'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find data', err)
  })

  //close Connexion
  client.close();
})
