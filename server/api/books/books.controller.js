'use strict';

var _ = require('lodash');
var Books = require('./books.model');

// Get list of bookss
exports.index = function(req, res) {
  Books.find(function (err, bookss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(bookss);
  });
};
//get a subset of Books
exports.showGroup = function(req,res){
  Books.find({owner:req.body.owner},function(err,books){

    if(err){return handleError(res,err);}
    return res.status(200).json(books);
  });
};

// Get a single books
exports.show = function(req, res) {
  Books.findById(req.params.id, function (err, books) {
    if(err) { return handleError(res, err); }
    if(!books) { return res.status(404).send('Not Found'); }
    return res.json(books);
  });
};

// Creates a new books in the DB.
exports.create = function(req, res) {
  Books.create(req.body, function(err, books) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(books);
  });
};

// Updates an existing books in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Books.findById(req.params.id, function (err, books) {
    if (err) { return handleError(res, err); }
    if(!books) { return res.status(404).send('Not Found'); }
    var updated = _.merge(books, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(books);
    });
  });
};

// Deletes a books from the DB.
exports.destroy = function(req, res) {
  Books.findById(req.params.id, function (err, books) {
    if(err) { return handleError(res, err); }
    if(!books) { return res.status(404).send('Not Found'); }
    books.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
