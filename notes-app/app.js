const fs = require('fs');
const getNotes = require('./notes')
const { add, name } = require('./utils.js')
const validator = require('validator').default

// fs.writeFileSync('notes.txt', 'My name is Joker');
// fs.appendFileSync('notes.txt', '\nHello to my course');
// console.log(name, add(1, 2));
// const note = getNotes('Your note....')
// console.log(note);

// const noteFile = fs.readFileSync('notes.txt', { encoding: 'utf8' });
// const readNoteFile = getNotes(noteFile)
// console.log(readNoteFile);

console.log(validator.isEmail('jokerboy1412@gmail.com'))
console.log(validator.isURL('https://google.com'))