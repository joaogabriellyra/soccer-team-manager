const fs = require('fs').promises;
const path = require('path');

const existingId = async (req, _res, next) => {
    const { id } = req.params;
    const data = await fs.readFile(path.resolve(__dirname, '../data/teams.json'));
        const teams = JSON.parse(data);
    if (teams.some((t) => t.id === Number(id))) {
        next();
    } else {
        next({ status: 404, message: 'Id not found.' });
    }
};

module.exports = existingId;