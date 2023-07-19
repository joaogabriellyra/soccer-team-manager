const express = require('express');
const { findAllResults, findResultByName, newResult } = require('../resultsController');

const router = express.Router();

router.get('/', findAllResults);
router.get('/:name', findResultByName);
router.post('/', newResult);

module.exports = router;