const mongoose = require('mongoose');

//Genere Schema
 const bookSchema = mongoose.Schema({
   title: {
     type: String,
     require: true
   },
   genre: {
     type: String,
     require: true
   },
   description: {
     type: String
   },
   author: {
     type: String,
     require: true
   },
   publisher: {
     type: String
   },
   pages: {
     author: String
   },
   image_url: {
     author: String
   },
   buy_url: {
     author: String
   },
   create_date:{
     type: Date,
     default: Date.now
   }
 });

 const book = module.exports = mongoose.model('Book', bookSchema);

 // Get Generes
 module.exports.getBooks = function (callback, limit) {
   Book.find(callback).limit(limit);
 }

 // Get BOOK
 module.exports.getBookById = function (id, callback) {
   Book.findById(id, callback);
 }

 // Add Book
 module.exports.addBook = function (book, callback) {
   Book.create(book, callback);
 }

 // Update Book
 module.exports.updateBook = function (id, book, options, callback) {
   var query = {_id: id};
   var update = {
     title: book.title,
     genre: book.genre,
     description: book.description,
     author: book.author,
     publisher: book.publisher,
     pages: book.pages,
     image_url: book.image_url,
     buy_url: book.buy_url
   }
   Book.findOneAndUpdate(query, update, options, callback);
 }

 // Delete book
 module.exports.removeBook = function (id, callback) {
   var query = {_id: id};
   Book.remove(query, book, callback);
 }