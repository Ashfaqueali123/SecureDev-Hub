const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const complianceRoutes = require('./routes/complianceRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected: SecureDev DB'))
  .catch(err => console.error('❌ DB Connection Error:', err));

// Route Definitions
app.use('/api/auth', authRoutes);
app.use('/api/compliance', complianceRoutes);
app.use('/api/blog', blogRoutes);

// ... other app.use statements ...
app.use('/api/auth', authRoutes);
app.use('/api/compliance', complianceRoutes);
app.use('/api/blog', blogRoutes); // Add this line
// Base route
app.get('/', (req, res) => res.send('SecureDev Hub API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));