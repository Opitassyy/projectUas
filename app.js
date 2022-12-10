const express = require('express')
const app = express()
const mongoose = require('mongoose')
require ('dotenv/config')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// routes const
const jbeRoutes = require('./routes/jbe')
// routes app
app.use('/jbe', jbeRoutes)


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let od = mongoose.connection

od.once('open', ()=>{
    console.log('Connected');
})

od.on('error', console.error.bind(console, 'Error Detected'))


app.listen(process.env.PORT, ()=>{
    console.log(`Running di ${process.env.PORT}`);
})