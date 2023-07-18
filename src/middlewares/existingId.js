const teams = require('../utils/teams');
const { NOT_FOUND } = require('../utils/status');

const existingId = (req, res, next) => {
    const { id } = req.params;

    if (teams.some((t) => t.id === Number(id))) {
        next();
    } else {
        res.status(NOT_FOUND).json({ message: 'Id not found.' });
    }
};

module.exports = existingId;