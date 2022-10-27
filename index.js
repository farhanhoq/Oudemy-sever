const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

const coursename = require('./data/coursename.json')

app.get('/', (req, res) => {
    res.send('Running')
})

app.get('/coursename', (req, res) => {
    res.send(coursename)
})


app.listen(port, () => {
    console.log(port)
})