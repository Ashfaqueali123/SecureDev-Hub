const express = require('express');
const router = express.Router();
const Checklist = require('../models/Checklist');
const auth = require('../middleware/authMiddleware');

// Get all security tasks
router.get('/', auth, async (req, res) => {
  const tasks = await Checklist.find();
  res.json(tasks);
});

// Update a task (Mark as secure/completed)
router.patch('/:id', auth, async (req, res) => {
  const updatedTask = await Checklist.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

module.exports = router;