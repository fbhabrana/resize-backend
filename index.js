const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from localhost:3000
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);



app.get("/*", (req, res) => {
    res.send("SERVER IS RUNNING");
  });

// Connect to MongoDB  
  const DB_URL = process.env.DB_URL;

  
  mongoose
    .connect(DB_URL)
    .then(() =>
      app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));
  

