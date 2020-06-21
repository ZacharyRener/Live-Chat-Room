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

// Beautiful post 
app.post('/message', (req, res) => {

    // Recieving post parameters requires body-parser 
    console.log('New Message: ' + req.body.message)
    prompt.start()
    prompt.get( ['message'], (err, result) => {

        if(err) { return onErr(err); }
        res.send(result.message)
        console.log('Message sent\n') 

    } )

})

app.get('/test', (req, res) => {

    res.send("Test success!")

})

let port = 80;

app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${process.env.PORT || port}!`)
});