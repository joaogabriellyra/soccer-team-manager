const express = require('express');
const { findAllTeams, newTeam, updateTeam, findTeamById, 
    deleteTeamById } = require('../teamsController');
const validateTeam = require('../middlewares/validateTeam');
const existingId = require('../middlewares/existingId');

const router = express.Router();

router.get('/', findAllTeams);
router.post('/', validateTeam, newTeam);
router.put('/:id', existingId, validateTeam, updateTeam);
router.get('/:id', existingId, findTeamById);
router.delete('/:id', existingId, deleteTeamById);
router.use((error, _req, res, _next) => {
    const { status, message } = error;
    res.status(status).json({ message });
});
module.exports = router;