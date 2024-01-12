require('dotenv').config()
const express = require ('express')

const app = express ()

const port = 4000

app.get('/' , (req , res) =>{
    res.send('here is problem in you mind')
})

app.listen(process.env.PORT, () =>{
    console.log(`what is port saying ${port}`)
} )