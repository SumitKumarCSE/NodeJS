// Write a NodeJs program that reads a directory and lists all the files and subdirectories recursively.

const fs = require('fs');
const path = require('path');

function listFilesAndDirectories(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if(err) {
            console.error('Error reading directory:', err);
        } else {
            files.forEach((file) => {
                const filePath = path.join(dirPath, file);
                fs.stat(filePath, (err, stats) => {
                    if(err) {
                        console.error('Error getting file stats:', err);
                    } else {
                        if(stats.isDirectory()) {
                            console.log('Directory:', filePath);
                            listFilesAndDirectories(filePath);
                        } else {
                            console.log('File:', filePath);
                        }
                    }
                });
            });
        }
    });
}

listFilesAndDirectories('./myDirectory');