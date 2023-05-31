const { StringDecoder } = require('string_decoder');

// Create a new instance of StringDecoder with a specific encoding
const decoder = new StringDecoder('utf8');

// Create a buffer containing partial UTF-8 encoded data
const buffer = Buffer.from([0xE2, 0x82]);

// Decode the buffer in chunks
// We use the decoder.write(buffer) method to decode the buffer and obtain the corresponding string. Since the buffer contains only a partial character, the decoder returns the decoded portion of the buffer as "â".
console.log(decoder.write(buffer)); // Output: "â"

// Add another buffer with the remaining data
const remainingBuffer = Buffer.from([0xAC]);
console.log(decoder.write(remainingBuffer)); // Output: "¬"

// End the decoding process
// We end the decoding process using the decoder.end() method. This returns any remaining partial characters and resets the decoder's internal state. In this case, since there are no remaining partial characters, an empty string is returned.
console.log(decoder.end()); // Output: ""

// Create a buffer with complete UTF-8 encoded data
const completeBuffer = Buffer.from([0xE2, 0x82, 0xAC]);

// Decode the complete buffer
console.log(decoder.write(completeBuffer)); // Output: "€"
console.log(decoder.end()); // Output: ""
