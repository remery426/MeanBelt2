var express = require('express')
var app = express();
var bp = require("body-parser")
var path = require("path")
var port = 8000;
var session = require("express-session")
app.use(session({
    secret: 'Chris Kim',
    resave: true, 
    saveUninitialized: true, 
    cookie: {secure: false}
}))
app.use(bp.json());
app.use(express.static(path.join(__dirname+'/client')))
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(port, function(){
    console.log("server running")
})