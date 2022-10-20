import fs from 'fs'
import { getNotes } from './notes.js'
import { add, name } from './utils.js'
import validator from 'validator'
import chalk from 'chalk'
import yargs from 'yargs'

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

yargs.version('1.1.0')
    // Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => {
        console.log('Removing a new note!');
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading a note!');
    }
})


// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        console.log('Listing out all notes!');
    }
})

yargs.parse()