// Routes HTML
const router = require ('express').Router()
const path = require ('path');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, "./public/assets/notes.html"))
});
