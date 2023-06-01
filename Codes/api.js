// APIs are mechanisms that enables two software components to communicate with each other using a set of definitions and protocols.
// API stand for Application Programming Interface.


const dbConnect = require('./mongo_dbconnect');
const express = require('express');
const app = express();
const mongodb = require('mongodb'); // required for delete api

app.use(express.json());   // middleware // use while post api
// get api
app.get('/', async (req,res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});


// post api
app.post("/", async (req,res) => {
    let data = await dbConnect();
    let result = await data.inertOne(req.body);
    res.send(result);
});

// put api
/*app.put("/", async(req,res) => {
    const data = await dbConnect();
    let result = data.updateOne(
        { name: 'i phone max pro' },
        {$set: {price: 1620}}
    )
    res.send(result);
})*/

// another way of put method
app.put("/:name", async(req,res) => {
    const data = await dbConnect();
    let result = data.updateOne(
        { name: req.params.name },
        {$set: req.body}
    )
    res.send(result);
})

// delete api
app.delete("/:id", async (req,res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(result);
})

app.listen(5000);

