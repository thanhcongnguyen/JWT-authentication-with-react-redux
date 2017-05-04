var express = require('express')
var app = express()


app.listen(process.env.PORT||3000, function(){
    console.log('server started ')
})

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

var pg = require('pg')
var db = require('./db.js')

app.get('/', function(req, res){
    res.render('index')
})


app.get('/login', function(req, res){
    db.checkSignIn('thanhcongnguyen','123456789',(result)=>{
        res.render('index', {user: result.rows[0]})
    })
})
    

