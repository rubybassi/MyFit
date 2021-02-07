// package and file dependencies
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
require('dotenv').config();

// initialise server
const app = express();

// connect to database for deployment
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true, useUnifiedTopology: true });

// middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/html'));

const port = process.env.PORT || 3000;
app.listen(port,() => {
 console.log(`listening on port: ${port}`);
});
