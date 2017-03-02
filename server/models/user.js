var mongoose = require('mongoose');
var Schema = mongoose.Schema 

var UserSchema = new Schema({
    name: {type:String, required: true, minlength: 3},
    appointments : {type: Array}
})

mongoose.model('User', UserSchema);