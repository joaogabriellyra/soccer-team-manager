const fs = require('fs').promises;
const path = require('path');
const { OK, CREATED } = require('./utils/status');

const RESULTS_DATA_PATH = './data/placares.json';

const findAllResults = async (_req, res) => {
    const data = await fs.readFile(path.resolve(__dirname, RESULTS_DATA_PATH));
    const results = JSON.parse(data);
    res.status(OK).json({ results });
};

const newResult = async (req, res) => {
    const result = { ...req.body };
    const data = await fs.readFile(path.resolve(__dirname, RESULTS_DATA_PATH));
    const results = JSON.parse(data);
    results.push(result);
    await fs.writeFile(path.resolve(__dirname, RESULTS_DATA_PATH), JSON.stringify(results));
    res.status(CREATED).json({ result });
};

const findResultByName = async (req, res) => {
    const { name } = req.params;
    const data = await fs.readFile(path.resolve(__dirname, RESULTS_DATA_PATH));
    const results = JSON.parse(data);
    const resultByName = results.find((result) => result[name]);
    res.status(OK).json(resultByName[name]);
};

module.exports = {
    findAllResults,
    newResult,
    findResultByName,
};