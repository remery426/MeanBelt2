var mongoose = require('mongoose');
var Schema = mongoose.Schema 

var AppointmentSchema = new Schema({
    user: {type:Object, required: true},
    date: {type:Date, required: true},
    time: {type:Date, required: true},
    datetime: { type: Date, required: true},
    complaint: { type: String, required: true, minlength:10}
    
})

mongoose.model('Appointment', AppointmentSchema);