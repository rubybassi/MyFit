// package and file dependencies
const express = require('express');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 3000;

// initialise server
const app = express();

// middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/html'));

app.listen(port,() => {
 console.log(`listening on port: ${port}`);
});
