const express = require('express')
const app = express();
const path = require('path')

//Settings
app.set('port',3000)
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'view'))
app.engine('html', require('ejs').renderFile)

//Routes
app.use(require('./routes/routes'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

//Listening Server
app.listen(app.get('port'), ()=>{
    console.log("server on port ", app.get('port'))
})

