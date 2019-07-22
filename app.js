const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

// Middlewares
app.use(express.json());
app.use(cors());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to DB');
}); 

app.listen(3000);