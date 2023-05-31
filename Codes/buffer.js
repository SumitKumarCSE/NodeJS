// Creating a buffer and writing data to it
const buffer = Buffer.alloc(8);
buffer.write('Hello!');
console.log('Buffer:', buffer);

// Reading data from the buffer
const data = buffer.toString();
console.log('Data:', data);
console.log(buffer.toString('ascii', 1,3));

// Creating a buffer from a string
const bufferFromStr = Buffer.from('Welcome to Node.js');
console.log('Buffer from String:', bufferFromStr);

// Copying data from one buffer to another
const targetBuffer = Buffer.alloc(10);
bufferFromStr.copy(targetBuffer);
console.log('Copied Buffer:', targetBuffer.toString());

// Filling a buffer with a specific value
const fillBuffer = Buffer.alloc(5);
fillBuffer.fill('A');
console.log('Filled Buffer:', fillBuffer.toString());

// Comparing two buffers
const buffer0 = Buffer.from('ABC');
const buffer00 = Buffer.from('DEF');
const res = buffer0.compare(buffer00);
console.log('Comparison Result:', res);

// Slicing a buffer
const originalBuffer = Buffer.from('Hello, World!');
const slicedBuffer = originalBuffer.slice(7, 12);
console.log('Sliced Buffer:', slicedBuffer.toString());

// Create an uninitiated buffer: Following is the syntax of creating an uninitiated buffer of 10 octets:
var buf = Buffer.alloc(10);
// Create a buffer from array: Following is the syntax to create a Buffer from a given array:
var buf = Buffer.alloc([10, 20, 30, 40, 50]);   
// Create a buffer from string: Following is the syntax to create a Buffer from a given string and optionally encoding type:
var buf = Buffer.alloc("Simply Easy Learning", "utf-8");   

// concatenate buffer
var buf1 = Buffer.from('TutorialsPoint ');
var buf2 = Buffer.from('Simply Easy Learning');
var buf3 = Buffer.concat([buf1,buf2]);
var buf4 = Buffer.concat([buf2,buf1],30);

console.log("buffer3 content: " + buf3.toString());
console.log("buffer 4: " + buf4.toString());

// compare buffers
var buffer1 = new Buffer.from('ABCD');
var buffer2 = new Buffer.from('ABCD');
var result = buffer1.compare(buffer2);
console.log(result);
if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}

var buffer3 = new Buffer.from('abcd');
var buffer4 = new Buffer.from('ABCD');
var result2 = buffer3.equals(buffer4);
console.log(result2);
if(result2 < 0) {
   console.log(buffer3 +" comes before " + buffer4);
} else if(result2 === 0) {
   console.log(buffer3 +" is same as " + buffer4);
} else {
   console.log(buffer3 +" comes after " + buffer4);
}


// copy buffer
var buf1 = new Buffer.from('This is node js class');
var buf2 = new Buffer.alloc(10);
var buf3 = new Buffer.from("Hello World");
var buf4 = new Buffer.from("Hello World");
buf1.copy(buf2,0,6,12);
buf1.copy(buf3,2,6,12);
buf1.copy(buf4);

console.log("buffer2 content: " + buf2.toString());
console.log("buffer3 content: " + buf3.toString());
console.log("buffer4 content: " + buf4.toString());


// splice buffer
var buffer1 = new Buffer.from('This is node js class');
//slicing a buffer
var buffer2 = buffer1.slice(3,9);
var buffer3 = buffer1.slice(0,-9);
var buffer4 = buffer1.slice(-9,-1);
console.log("buffer2 content: " + buffer2.toString());
console.log("buffer3 content: " + buffer3.toString());
console.log("buffer4 content: " + buffer4.toString());

const buf = Buffer.alloc(5);
console.log(buf);
console.log(buf.toString());

const buf1 = Buffer.from("buffer");
const buf2 = Buffer.from(buf1);
const buf3 = Buffer.from('5467','hex');
console.log(buf1.toString());
console.log(buf2.toString());
console.log(buf3.toString());