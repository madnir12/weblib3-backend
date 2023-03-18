const mongoose = require('mongoose');

const page = new mongoose.Schema({
  content: {
    type: mongoose.Schema.Types.Mixed,
    default: String
  },
  otherUsers: [{
    name: {
      type: String
    },
    id: {
      type: String
    }
  }],
  pageNumber: {
    type: Number
  },
  pageType: {
    type: String,
    enum: ['content page', 'table of contents', 'dedication page', 'acknowledgements page'],
    default: 'content page'
  },
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'public'
  }
},{timestaps: true});
module.exports = page;