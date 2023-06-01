// CRUD (Create, Read, Update, Delete)

// Create
// Create or Insert operations add a new file/document into the database collection.
// Browser requests using the POST method is used to create new data.
// A POST request can be triggered using an HTML form.
// In Express, POST requests are handled using app.post(path, callback)
// To create new data in the database using MongoDB, we use the db.collection.insertOne() or db.collection.insertMany() function.


// Read
// Read operations are used to read the incoming request or to getch data from the database.
// The browser performs the Read operations using the GET method.
// In express, GET requests are handled using app.get(path,callback)
// To read data from the database using MongoDB, we use db.collection.find() and pass the queries.


// Update
// Update operations are performed to change the existing data in the collection/database.
// The browser performs the update operations using the PUT method
// PUT request can be triggered by an HTML form by using the method as PUT.
// In Express, PUT request are handled using app.put(path,callback).
// To update data in the database using MongoDB, we use db.collectionupdateOne() or db.collection.replaceOne() or db.collection.updateMany() and pass the queries.



// Delete
// Delete operations are performed to delete the existing data in the collection/databse.
// The browser performs the delete operation using the DELETE method.
// In express, DELETE requests are handled using app.delete(path,callback)
// To delete data from the database using MongoDB, we use db.collection.deleteOne() or db.collection.deleteMany().


// Collection: It is a group of mongodb documents. It is the equivalent of an RDBMS table. A collection exists within a single database.

// Connect mongo with node
const {MongoClient} = require('mongodb');
// or
// const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const databaseName = 'e-comm';
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('products');
    // let data = await collection.find({}).toArray();  // put await otherwise it will show promise<pending>

    // you can also provide some conditions to output
    let data = await collection.find({brand:'samsung'}).toArray();
    console.log(data);
}

getData();




// Make file for db connection
// moved the below part to mongo_dbconnect.js

async function dbConnect() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('products');
}
// console.log(dbConnect());   // it will return promise

dbConnect().then((res) => {
    // console.log(res.find().toArray());  // it will reutrn promise
    res.find().toArray().then(data=>{     // you can write condition inside find
        console.log(data);
    })
})


// importing db.connect
const dbConnect = require('./mongo_dbconnect');



const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();


// inserting in db
const insertData = async () => {
    let data = await dbConnect();
    let result = await data.insertOne(
        {name:'note 5',brand:'vivo',price:320,category:'mobile'}

        // create array if you want to insert many attributes
    );
    console.log(result);
    if(result.acknowledged) {
        console.log("data inserted");
    } else {
        console.log("data not inserted");
    }
};
insertData();


// updating in db
const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'m40'},
        {
            $set:{name:'f19 pro'}
        }
    )
    console.log(result);
}
updateData();


// deleting in db
const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteOne({name:'u20'});
    console.log(result);
}
deleteData();





// create database
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});



// create table
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

// alter table
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table altered");
    });
  });

// insert one row into table
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

// insert multiple rows into table
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
      ['John', 'Highway 71'],
      ['Peter', 'Lowstreet 4'],
      ['Amy', 'Apple st 652'],
      ['Hannah', 'Mountain 21'],
      ['Michael', 'Valley 345'],
      ['Sandy', 'Ocean blvd 2'],
      ['Betty', 'Green Grass 1'],
      ['Richard', 'Sky st 331'],
      ['Susan', 'One way 98'],
      ['Vicky', 'Yellow Garden 2'],
      ['Ben', 'Park Lane 38'],
      ['William', 'Central st 954'],
      ['Chuck', 'Main Road 989'],
      ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });


// When executing a query, a result object is returned
/*{
    fieldCount: 0,
    affectedRows: 14,
    insertId: 0,
    serverStatus: 2,
    warningCount: 0,
    message: '\'Records:14  Duplicated: 0  Warnings: 0',
    protocol41: true,
    changedRows: 0
  }*/

// console.log(result.affectedRows)