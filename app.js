const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongo = process.env.MONGO_DB

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes)

app.listen(port, async() => {
    console.log(`Server running on http://localhost:${port}`);

    await mongoose.connect(mongo);
    console.log('MongoDB connected Successfully');
})
