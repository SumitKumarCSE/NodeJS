var http = require('http');
var url = require('url');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 2000;
var server = http.createServer((req, res) => {
  if(req.url=='/admission') {
    fs.readFile('admission.html',(err,data) => {
      res.write(data);
      return res.end();
    })
  } else if(req.url=='/home') {
    fs.readFile('demo_fs.html', (err,data) => {
      res.write(data);
      return res.end();
    })
  } else {
    res.write('error');
    return res.end();
  }
  res.end();
  res.writeHead(200, {'Content-Type': 'text/html'});

  // The 'req' argument that represents the request from the client, as an object (http.IncomingMessage object).
  // This object has a property 'url' which holds the part of the url that comes after the domain name.
  res.write(req.url);
  var q = url.parse(req.url,true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);


    if(req.url=='/home') {
      res.write('<h1>Welcome</h1>');
    } else if(req.url=='/product') {
      res.write('<h1>Hi</h1>');
    } else {
      res.write('error');
    }
    res.end();
});

server.listen(2000);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});




var url = require('url');
var adr = 'http://localhost:8000/default.htm?name=Raj&Age=20';
var q = url.parse(adr);
console.log(q.host); // returns 'localhost:8000'
console.log(q.href); // returns 'http://locahost:8000/default.htm?name=Raj&Age=20'
console.log(q.hostname); // returns 'localhost'
console.log(q.port); // return 8000
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?name=Raj&Age=20'
console.log(q.path); // return '/default.htm?name=Raj&Age=20'
console.log(q.auth); // returns null
console.log(q.protocol); // return 'http'
console.log(q.query.name); // return 'undefined'
console.log(q.query); // returns 'name=Raj&Age=20'


let http = require('http');
let url = require('url');
let fs = require('fs');
let server = http.createServer((req,res) => {
  var file = "./" + url.parse(req.url).pathname;
  fs.readFile(file, (err,data) => {
    if(err) {
      return res.end("404 Not found");
    }
    return res.end(data);
  });
})
server.listen(3000);
