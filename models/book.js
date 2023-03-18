const mongoose = require('mongoose'),
pageSchema = require("./page");

const bookSchema = new mongoose.Schema({
  autherId: {
    type: String,
    required: true
  },
  autherName: {
    type: String,
    required: true
  },
  autherPhoto: {
    type: String,
    required: true
  },
  bookCover: {
    type: String,
    required: true
  },
  categories: [{
    type: String
  }],
  name: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    default: "some one"
  },
  otherUsers: [{
    name: {
      type: String,
    },
    id: {
      type: String,
    }
  }],
  visibility: {
    type: String
  },
  pages: [pageSchema]
},{timestamps: true});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;