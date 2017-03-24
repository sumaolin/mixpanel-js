var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var LogSchema = new Schema({
  'enentType': {type: String},
  'commonInfo': {type: String},
  'specialInfo': {type: String}
});


module.exports = mongoose.model('Log',LogSchema);