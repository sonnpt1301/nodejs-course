import fs from 'fs'
import { getNotes } from './notes.js'
import { add, name } from './utils.js'
import validator from 'validator'
import chalk from 'chalk'
import yards from 'yargs'

// fs.writeFileSync('notes.txt', 'My name is Joker');
// fs.appendFileSync('notes.txt', '\nHello to my course');
// console.log(name, add(1, 2));
// const note = getNotes('Your note....')
// console.log(note);

// const noteFile = fs.readFileSync('notes.txt', { encoding: 'utf8' });
// const readNoteFile = getNotes(noteFile)
// console.log(readNoteFile);
// console.log(validator.isEmail('jokerboy1412@gmail.com'))
// console.log(validator.isURL('https://google.com'))
// console.log(chalk.green('Success!!!!!!!!!'))

console.log(yards.argv);
const command = process.argv[2];
console.log(process.argv)
if (command == 'add') {
    console.log('Adding note!');
} else if (command == 'remove') {
    console.log('Removing note!');
}