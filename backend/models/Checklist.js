const mongoose = require('mongoose');

const ChecklistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  severity: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'], default: 'Medium' },
  isCompleted: { type: Boolean, default: false },
  remediation: String // Steps to fix the security gap
});

module.exports = mongoose.model('Checklist', ChecklistSchema);