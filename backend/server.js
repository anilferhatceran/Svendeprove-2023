const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', function(req,res){
    res.send('Hello Testing')
})

app.listen(process.env.SERVER_PORT)