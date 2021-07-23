const  router  = require('express').Router()
const fs = require('fs')

let notes = require('../db/db.json')

// Get current notes
router.get('/notes', (req, res) => {
    res.json(notes)
})


// This is what will allow you to create a note
router.post('/notes', (req, res) => {
    var newNote = req.body
    // if (notes.length) {
    //     newNote.id = notes[notes.length -1].id + 1
    // }else{
    //     newNote.id = 1
    // }
    newNote.id = Math.floor(Math.random() *125432534251435)
    notes.push(newNote)
    fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
        console.log(err)
        res.sendStatus(200)
    })
})

// This function allows you to delete notes
router.delete("/notes/:id", (req, res) => {
    const removeNote = req.params.id;
    console.log(removeNote);
    // const newArr = notes.filter(note => note.id !== removeNote)
    notes.forEach((note, index) => {
        if(note.id == removeNote){
            notes.splice(index, 1)
        }
    })

    console.log
    fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
        // notes = newArr
        console.log(err)
        res.sendStatus(200)
    })
})

module.exports = router;