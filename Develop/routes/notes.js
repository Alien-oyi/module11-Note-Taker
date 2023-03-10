const notes = require('express').Router()

const {v4: uuidv4} = require('uuid')

const {readFromFile, readAndAppend, writeToFile} = require('../helper/fshelper')

notes.get("/",(req,res)=> {
    readFromFile('./db/db.json').then((data)=>{
        res.json(JSON.parse(data))
    })
})

notes.post('/',(req,res)=> {
    const{title,text,id} = req.body
    if (req.body) {
        const newNote = {
            id:uuidv4(),
            title,
            text
        };
        readAndAppend(newNote,"./db/db.json")
        res.json("Note added")
    } else {
        res.error('Failed to add note')
    }
})

notes.delete('/:id',(res,req)=> {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
    .then((data)=> JSON.parse(data))
    .then((json)=> {
        const result =json.filter((note)=>note.id !== noteId)
        writeToFile('./db/db.json',result)
        return res.json(result)
    })
})



module.exports = notes