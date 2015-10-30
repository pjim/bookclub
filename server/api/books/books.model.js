'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BooksSchema = new Schema({
  title: String,
  author:String
});

module.exports = mongoose.model('Books', BooksSchema);
