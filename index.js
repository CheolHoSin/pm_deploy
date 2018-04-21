const express = require('express')

const app = express()
const portnum = 3000

app.get('/', (req, res) => {
    res.send('HELLO WORLD!')
})

app.listen(portnum, () => {
    console.log(`App is started: ${portnum}`)
})