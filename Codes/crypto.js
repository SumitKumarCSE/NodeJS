const crypto = require('crypto');

// hashing
const hash = crypto.createHash('sha256');
hash.update('Hello, World!');
const digest = hash.digest('hex');
console.log('SHA-256 digest:', digest);



// encryption and decryption
// encryption
const algorithm = 'aes-256-cbc';
const key1 = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key1, iv);
let encrypted = cipher.update('Secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted message:', encrypted);

// decryption
const decipher = crypto.createDecipheriv(algorithm, key1, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted message:', decrypted);



// generation random values
const randomBytes = crypto.randomBytes(16);
console.log('Random Bytes:', randomBytes.toString('hex'));

const randomUUID = crypto.randomUUID();
console.log('Random UUID:', randomUUID);



// key derivation
const password = 'MySecretPassword';
const salt = crypto.randomBytes(16);
const key2 = crypto.scryptSync(password, salt, 32);
console.log('Derived Key:', key2.toString('hex'));
