const express = require('express');
const os = require('os');
var cors = require('cors')
const app = express();
let bodyParser = require('body-parser')
const prompt = require('prompt')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('dist'));


let posts = []

// Beautiful post 
app.post('/message', (req, res) => {

    // Recieving post parameters requires body-parser 
    console.log('New Message: ' + req.body.message)
    console.log('From: ', req.body.name)

    posts = [...posts, 
        {"message": req.body.message,
         "name": req.body.name }
      ]

})

app.get('/messages', (req, res) => {

    res.json(posts)

})

let port = 80;

app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${process.env.PORT || port}!`)
});