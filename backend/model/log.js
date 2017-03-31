var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var LogSchema = new Schema({
  'eType': {type: String},
  'domEType': {type: String},
  'commonInfo': {type: String},
  'specialInfo': {type: String},
  'domText': {type: String}
});


module.exports = mongoose.model('Log',LogSchema);