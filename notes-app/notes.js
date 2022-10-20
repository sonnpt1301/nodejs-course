import fs from 'fs'

const getNotes = (note) => {
    return note;
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push({ title, body })

        saveNotes(notes)
        console.log('New note added');
    } else {
        console.log('Note title already taken')
    }

}

const loadNotes = () => {
    try {
        const notes = fs.readFileSync('notes.json', { encoding: 'utf8' })
        return JSON.parse(notes)
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

export { getNotes, addNote }