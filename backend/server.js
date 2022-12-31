const express = require('express')
const app = express()
require('dotenv').config()
const core =require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(core())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))