const fs = require('fs');
const http = require('http');

// Readable stream example: Reading data from a file
const readableStream = fs.createReadStream('input.txt', 'utf8');

readableStream.on('data', (chunk) => {
  console.log('Read chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('Reading from the file completed.');
});

// Writable stream example: Writing data to a file
const writableStream = fs.createWriteStream('output.txt', 'utf8');

writableStream.write('Hello,');
writableStream.write(' World!');
writableStream.end();

console.log('Writing to the file completed.');

// Duplex stream example: Creating an HTTP server
const server = http.createServer((req, res) => {
  // Reading from the request
  req.on('data', (chunk) => {
    console.log('Received data from request:', chunk);
  });

  // Writing to the response
  res.write('Hello, client!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});


const fs = require('fs');
const zlib = require('zlib');

// Piping streams: Reading from a file and writing to another file
const readableStream1 = fs.createReadStream('input.txt');
const writableStream1 = fs.createWriteStream('output.txt');

readableStream1.pipe(writableStream1);
console.log('Piping streams completed.');

// Chaining streams: Reading from a file, compressing, and writing to a compressed file
const compressStream = fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('output.txt.gz'));

console.log('Chaining streams for compression completed.');

// Chaining streams: Reading from a compressed file, decompressing, and writing to a decompressed file
const decompressStream = fs.createReadStream('output.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('decompressed.txt'));

console.log('Chaining streams for decompression completed.');
