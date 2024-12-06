const path = require('path');

// Join multiple path segments
const fullPath = path.join('/users', 'Ocyber', 'documents', 'file.txt');
console.log("Full Path: " + fullPath);

// Get the file name from a path
const fileName = path.basename('/users/Ocyber/documents/file.txt');
console.log("File Name: " + fileName);

// Get the file extension
const fileExtension = path.extname('/users/Ocyber/documents/file.txt');
console.log("File Extension: " + fileExtension);

// Get the directory name from a path
const dirName = path.dirname('/users/Ocyber/documents/file.txt');
console.log("Directory Name: " + dirName);
