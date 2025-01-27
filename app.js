const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./routes')

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongo = process.env.MONGO_DB

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
// app.use(routes);

app.listen(port, async() => {
    console.log(`Server running on http://localhost:${port}`);

    await mongoose.connect(mongo);
    console.log('MongoDB connected Successfully');
})
