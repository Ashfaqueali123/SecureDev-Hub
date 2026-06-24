const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['News', 'Tutorial', 'Case Study'], required: true },
  content: { type: String, required: true },
  author: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', ArticleSchema);