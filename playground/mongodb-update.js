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

  //find one and update
  // db.collection('todos').findOneAndUpdate(
  //   {
  //     _id: new ObjectID('5ad2b4d6dfc0ebb43103d36b')
  //   },
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   },
  //   {
  //     returnOriginal: false
  //   }
  // ).then((result) => {
  //   console.log(result);
  // });

  //update user
  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID('5ad2b584165c6eb479f71a5f')
    },
    {
      $set: {
        name: 'Aida'
      },
      $inc: {
        age: 3
      }
    },
    {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  });


  //close Connexion
  client.close();
})
