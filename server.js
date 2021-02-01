// Package and file dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.listen(port,() => {
 console.log(`listening on port: ${port}`);
});