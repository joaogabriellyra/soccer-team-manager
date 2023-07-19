const fs = require('fs').promises;
const path = require('path');
const { NOT_FOUND } = require('../utils/status');

const existingId = async (req, res, next) => {
    const { id } = req.params;
    const data = await fs.readFile(path.resolve(__dirname, '../data/teams.json'));
        const teams = JSON.parse(data);
    if (teams.some((t) => t.id === Number(id))) {
        next();
    } else {
        res.status(NOT_FOUND).json({ message: 'Id not found.' });
    }
};

module.exports = existingId;