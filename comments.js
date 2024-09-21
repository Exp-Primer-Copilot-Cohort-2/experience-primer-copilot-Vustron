// create web server
const express = require('express');
const app = express();

// get the comments data
const comments = require('./comments.json');

// Middleware
app.use(express.json());



