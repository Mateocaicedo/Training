const express = require('express')
const cors = require('cors')
const app = express();
const path = require('path')
//Settings
app.set('port',4000)
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'view'))
app.engine('html', require('ejs').renderFile)
app.use(cors())

//Routes
app.get('/',(req,res)=>{
    res.render('index.html')
    
})

//static files
app.use(express.static(path.join(__dirname, 'public')))

//Listening Server
app.listen(app.get('port'), ()=>{
    console.log("server on port ", app.get('port'))
})
