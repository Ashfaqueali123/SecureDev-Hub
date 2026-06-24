const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

/**
 * @route   GET /api/blog
 * @desc    Get all security articles (News, Tutorials, Case Studies)
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    // Sort by date: newest first
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: "Error fetching security articles", error: err.message });
  }
});

/**
 * @route   GET /api/blog/category/:type
 * @desc    Get articles by category (e.g., /api/blog/category/Tutorial)
 * @access  Public
 */
router.get('/category/:type', async (req, res) => {
  try {
    const articles = await Article.find({ type: req.params.type }).sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: `Error fetching ${req.params.type} articles`, error: err.message });
  }
});

/**
 * @route   GET /api/blog/:id
 * @desc    Get a single article by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: "Error fetching the article", error: err.message });
  }
});

/**
 * @route   POST /api/blog
 * @desc    Create a new article (Admin Only)
 * @access  Private/Admin
 */
// Note: You would typically add the authMiddleware here to restrict access to Admins
router.post('/', async (req, res) => {
  const { title, type, content, author } = req.body;

  try {
    const newArticle = new Article({
      title,
      type,
      content,
      author
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(400).json({ message: "Error saving article", error: err.message });
  }
});

module.exports = router;