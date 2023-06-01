const express = require('express');
const app = express();

app.get("", (req,res) => {
    res.send(`
    <h1>Welcome to Home Page</h1>
    <a href="/about">Go to About Page</a>
    `);
});

app.get("/about", (req,res) => {
    res.send(`
    <h1>Welcome to About Page</h1>
    <a href="/">Go to Home Page</a>
    <br>
    <p>If you are having any query in url then below is the way to get that</p>
    <h3>Use this url 'localhost:5000/about?name=Sumit'</h3>
    <h1>Hello ${req.query.name}</h1>
    `);
});
app.listen(5000);


const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));

app.set('view engine','ejs');
app.get('',(_,res) => {
    res.sendFile(`${publicPath}/index.html`)
});
app.get('/profile',(_,res) =>{
    const user = { 
        name:'Sumit',
        email:'sumitkumar@gmail.com',
        country:'India',
        skills:['php','js','nodejs','java']
    }
    res.render('profile',{user})
});
app.get('/login',(_,res)=>{
    res.render('login');
})
app.get('/about',(_,res) => {
    res.sendFile(`${publicPath}/about.html`)
});
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/error404.html`)
});

app.listen(5000);

// express.route

// var express = require('express');
// var router = express.Router();

// router.get('/', (_,res) => {
//     res.send('Wiki home page');
// });

// router.get('/about',(_,res) => {
//     res.send('About this wiki');
// });

// module.exports = router;