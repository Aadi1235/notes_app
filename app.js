require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const cors = require('cors');

app.use(cors({
  origin: ['https://notes-app-black-kappa.vercel.app', 'http://localhost:5173'], // Add localhost port if developing locally
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes for notes
app.use('/api/notes', require('./routes/notes'));

// Simple test route
app.get('/', (req, res) => {
  res.send('Hello World!, Database connected successfully');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
