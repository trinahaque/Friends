var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FriendSchema = new Schema({
  first_name: {type: String, required: true, minlength:1},
  last_name: {type: String, required: true, minlength:1},
  birthday: {type:Date, required: true, minlength:1}
}, {timestamps: true});

var Friend = mongoose.model('Friend', FriendSchema);
