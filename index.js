const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

app.use(cors())

const coursename = require('./data/coursename.json')

app.get('/', (req, res) => {
    res.send('Running')
})

app.get('/coursename', (req, res) => {
    res.send(coursename)
})

app.get('/coursename/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = coursename.find(c => c.id === id);
    res.send(selectedCourse)
})


app.listen(port, () => {
    console.log(port)
})