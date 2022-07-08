const express = require('express')
const app = express()
let {people} = require('./data')
// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/api/people', (req,res) => {
    res.status(200).json({success:true,data:people})
})

app.post('/api/people', (req,res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false,msg: 'Please provide name value'})
    }
    else {
        return res.status(201).json({success:true,person:name})
    }
})

app.post('/api/postman/people', (req,res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false,msg: 'Please provide name value'})
    }
    else {
        return res.status(201).json({success:true,data:[...people,name]})
    }
})

app.post('/login', (req,res) => {
    const {name} = req.body
    if(name != '') {
        res.status(200).send(`Welcome ${name}`)
    }
    else {
        res.status(401).send('No Valid Input')
    }
})

app.listen(port=3000, hostname='127.0.0.1', () => {
    console.log(`Server is running on http://${hostname}:${port}`)
})