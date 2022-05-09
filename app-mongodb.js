var mongoclient=require("mongodb").MongoClient;
var mongodbUrl="mongodb://localhost:27017/sample";
var PersonSchema = require('./person.js');

var person=new PersonSchema({
    nama:"Rama Fajar",
    email:"ramafajar805@gmail.com",
    username:"rama_fajar"
});

mongoclient.connect(mongodbUrl, function(err,db){
  err ? console.log(err) : console.log("Koneksi ke MongoDB ok");
  db.collection("persons").insertOne(person, function(err, result){
     
      console.log(result);
      db.close();
  })
});