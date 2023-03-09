const fs = require("fs")
const express = require("express")
const app = express()

app.set('view engine','ejs')


app.get('/',(req,res)=> {
    console.log('we are adf');
    res.render('index');
})

app.listen(3000)
