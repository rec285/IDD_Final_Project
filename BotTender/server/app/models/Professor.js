var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProfessorSchema = {
    name: { type: String, required: true },
    comments: { type: String },
    uid: {type: String, require: true, unique: true},
    count: {type: Number}
};

module.exports = mongoose.model('Professor', ProfessorSchema);