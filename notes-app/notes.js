import fs from 'fs'
import chalk from 'chalk'

const getNotes = (note) => {
    return note
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push({ title, body })

        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title already taken')
    }
}

const loadNotes = () => {
    try {
        const notes = fs.readFileSync('notes.json', { encoding: 'utf8' })
        console.log(JSON.parse(notes))
        return JSON.parse(notes)
    } catch (error) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)
    if (notes.length < newNotes.length || notes.length === newNotes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note removed'))
    }
}

const getNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (!note) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        console.log(note)
    }

}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

export { getNotes, addNote, removeNote, loadNotes, getNote }