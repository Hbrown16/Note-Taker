const { Router } = require('express').Router()
const fs = require('fs')

let nates = require('../db.json')

// Get current notes
Router.get('/notes', (req, res) => {
    res.json(notes)
})


// This is what will allow you to create a note
Router.post('/notes', (req, res) => {
    var newNote = req.body
    if (notes.length) {
        newNote.id = notes[notes.length -1].id + 1
    }else{
        newNote.id = 1
    }
    notes.push(newNote)
    fs.writeFile('../db.json', JSON.stringify(notes), err => {
        console.log(err)
        res.sendStatus(200)
    })
})