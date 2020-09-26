const db = require("../db/db.json");

const fs = require('fs');

const path = require('path');

const { uuid } = require('uuidv4');

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.send(db);

    });

    app.post("/api/notes", function (req, res) {
        let newNote = {
            id: uuid(),
            title: req.body.title,
            text: req.body.text
        };
        db.push(newNote);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db), err => {
            if (err) throw err
        });

        res.json(newNote);



    });

    app.delete('/api/notes/:id', function (req, res) {
        const noteId = req.params.id;

        const index = db.findIndex(note => note.id === noteId);
        const deletedNote = db.splice(index, 1); 

        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db), err => {
            if (err) throw err
        });

        res.json(deletedNote);


    });



};

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
//   This means you'll need to find a way to give each note a unique `id` when it's saved. 
//   In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the
//    given `id` property, and then rewrite the notes to the `db.json` file.