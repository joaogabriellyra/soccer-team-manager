const express = require('express');
const morgan = require('morgan');
require('express-async-errors'); 
const teamsRouter = require('./routes/teams.router.');
const limiter = require('./utils/limiter');

const app = express();

app.use(limiter);
app.use(express.json());
app.use(morgan('combined'));
app.use('/teams', teamsRouter);

module.exports = app;