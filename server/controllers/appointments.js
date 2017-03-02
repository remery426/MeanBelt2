var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');
var User = mongoose.model("User")
module.exports = (function(){
    return{
        
          
add: function(req,res){
    var appointment = new Appointment(req.body)
        appointment.save();
        User.findById({_id:req.body.user._id},function(err,data){
            data.appointments.push(req.body)
            data.save();
           
        })
         res.json(req.body);
    
},
getAll: function(req,res){
  Appointment.find({}, function(err,data){
               res.json(data)
           }) 
        },
delete: function(req,res){
    Appointment.findByIdAndRemove({_id: req.body._id}, function(err,data){
        res.json(data)
    })
        },

    }

})()