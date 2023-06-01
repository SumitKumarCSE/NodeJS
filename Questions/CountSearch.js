// Write a NodeJS program to read a file and count the number of occurrences of a specific word
const fs = require('fs');

function countWordOccurrences(filename, word) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if(err) {
            console.error('Error reading file:', err);
        } else {
            // the below statement is for checking if the word exists or not
            // const occurrences = data.split(' ').filter((w) => w === word).length;

            // for checking the frequency
            const occurrences = data.match(new RegExp(`\\b${word}\\b`, 'gi')).length;
            console.log(`The word ${word} appears ${occurrences} times in the file.`);
        }
    });
}

countWordOccurrences('sample.txt', 'hello');