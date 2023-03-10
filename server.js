const fs = require("fs")
const express = require("express")
const app = express()



app.get('/',(req,res)=> {
    console.log('testing');
    res.render('index');
})

app.listen(3000)
