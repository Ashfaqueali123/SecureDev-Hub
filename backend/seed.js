const mongoose = require('mongoose');
const Article = require('./models/Article');
require('dotenv').config();

const seedData = [
  {
    "title": "Understanding XSS in Modern React Apps",
    "type": "Tutorial",
    "content": "XSS occurs when attackers inject malicious scripts...",
    "author": "Security Team"
  },
  {
    "title": "New Critical CVE in OpenSSL",
    "type": "News",
    "content": "A high-severity vulnerability was found in OpenSSL...",
    "author": "Threat Intel"
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to DB for seeding...");
    await Article.insertMany(seedData);
    console.log("✅ Articles added successfully!");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });