const fs = require('fs');

// Reading Files
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Read File:');
    console.log(data);
});

fs.readFile('demo_fs.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
});

// Writing Files
const content1 = 'This is a sample text to be written to a file.';
fs.writeFile('newFile.txt', content1, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File written successfully.');
});

// Working with Directories
fs.mkdir('newDir', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Directory created successfully.');
});

fs.readdir('.', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Files in current directory:');
    console.log(files);
});

// File Stats and Information
fs.stat('example.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File Stats:');
    console.log(stats);
});

// File Manipulation
fs.rename('example.txt', 'renamed.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File renamed successfully.');
});

fs.unlink('renamed.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File deleted successfully.');
});


// When using synchronous methods from 'fs' module in Node.js, the execution of code blocks that involve file system operations will be blocking. This means that the code will wait until the operation completes before moving on to the next line of code. In contrase, when using asynchronous methods, the code does not block and can continue executing while the file system operation is being performed.
const fs = require('fs');

// Reading Files
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('Read File:');
    console.log(data);
} catch (err) {
    console.error(err);
}

// Writing Files
const content = 'This is a sample text to be written to a file.';
try {
    fs.writeFileSync('newFile.txt', content, 'utf8');
    console.log('File written successfully.');
} catch (err) {
    console.error(err);
}

// Working with Directories
try {
    fs.mkdirSync('newDir');
    console.log('Directory created successfully.');
} catch (err) {
    console.error(err);
}

try {
    const files = fs.readdirSync('.');
    console.log('Files in current directory:');
    console.log(files);
} catch (err) {
    console.error(err);
}

// File Stats and Information
try {
    const stats = fs.statSync('example.txt');
    console.log('File Stats:');
    console.log(stats);
} catch (err) {
    console.error(err);
}

// File Manipulation
try {
    fs.renameSync('example.txt', 'renamed.txt');
    console.log('File renamed successfully.');
} catch (err) {
    console.error(err);
}

try {
    fs.unlinkSync('renamed.txt');
    console.log('File deleted successfully.');
} catch (err) {
    console.error(err);
}
