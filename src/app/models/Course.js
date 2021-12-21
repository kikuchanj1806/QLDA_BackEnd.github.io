const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    svPerform: { type: String },
    nameProject: { type: String },
    description: { type: String },
    nameTeacher: {type: String},
    fileWord: {type:String},
    fileZip: {type:String},
    slug: { type: String, slug: 'svPerform', unique: true },

  }, {
    timestamps: true,
  });




  module.exports = mongoose.model('Course', Course);