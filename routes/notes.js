const notes = require('express').Router();
const uuid = require('uuid');
const {readFromFile, readAndAppend, writeToFile} = require('../helper/fsHelper');

// GET
notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
  })

  
//POST
notes.post('/', (req, res) => {
  const { title, text, id } = req.body;
  if (req.body) {
    const newNote = {
      id: uuid,
      title,
      text
    };

    readAndAppend(newNote, './db/db.json');
    res.json("Note added");
  } else {
    res.error('Failed to adding note');
  }
});

module.exports = notes;
