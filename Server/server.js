let express = require('express')
let app = express()
let bodyParser = require('body-parser')
const prompt = require('prompt')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Homepage route
app.get('/', function (req, res) {

  res.send('hello world')

})

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

app.set('port', process.env.PORT || 5000)

// localhost:5000
app.listen(app.get('port'), function () {

    console.log("Waiting for messages...\n")

})

const respond = () => {

    

}

function onErr(err) {
    console.log(err)
    return 1
}