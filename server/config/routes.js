var user = require('./../controllers/users.js')
var appointment = require('./../controllers/appointments.js')
module.exports = function(app){
    app.post('/login', function(req,res){
        user.login(req, res)
    })
    app.get('/checkStatus', function(req,res){
        user.checkStatus(req,res)
    })
    app.post('/logout', function(req,res){
        user.logout(req,res)
    })
    app.post('/add', function(req,res){
    appointment.add(req,res)
    })
    app.get('/getAll', function(req,res){
    appointment.getAll(req,res)
    })
    app.post('/delete', function(req,res){
        appointment.delete(req,res)
    })
}