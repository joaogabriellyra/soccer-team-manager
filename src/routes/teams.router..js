const express = require('express');
const { findAllTeams, newTeam, updateTeam, findTeamById, 
    deleteTeamById } = require('../teamsController');
const validateTeam = require('../middlewares/validateTeam');
const existingId = require('../middlewares/existingId');

const router = express.Router();

router.get('/', findAllTeams);
router.post('/', validateTeam, newTeam);
router.use(existingId);
router.put('/:id', validateTeam, updateTeam);
router.get('/:id', findTeamById);
router.delete('/:id', deleteTeamById);
router.use((error, _req, res, _next) => {
    const { status, message } = error;
    res.status(status).json({ message });
});
module.exports = router;