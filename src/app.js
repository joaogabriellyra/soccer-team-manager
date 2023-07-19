const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('express-async-errors'); 
const teamsRouter = require('./routes/teams.router.');

const app = express();
const limiter = rateLimit({
    max: 100,
    windowMs: 15 * 60 * 1000,
    message: 'Too many requests from that IP',
});

app.use(limiter);
app.use(express.json());
app.use(morgan('combined'));
app.use('/teams', teamsRouter);

module.exports = app;