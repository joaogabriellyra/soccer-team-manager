const teams = require('./utils/teams');
const { OK, CREATED } = require('./utils/status');

const findAllTeams = (_req, res) => {
    res.status(OK).json({ teams });
};

const newTeam = (req, res) => {
    const team = { ...req.body };

    teams.push(team);

    res.status(CREATED).send(team);
};

const updateTeam = (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
    
    const teamToUpdate = teams.find((team) => team.id === Number(id));

    teamToUpdate.name = name;
    teamToUpdate.initials = initials;

    res.status(OK).json({ teamToUpdate });
};

const findTeamById = (req, res) => {
    const { id } = req.params;

    const teamById = teams.find((team) => team.id === Number(id));

    res.status(OK).json(teamById);
};

const deleteTeamById = (req, res) => {
    const { id } = req.params;
    const arrayPosition = teams.findIndex((team) => team.id === Number(id));
    teams.splice(arrayPosition, 1);
  
    res.status(OK).end();
};

module.exports = { findAllTeams, newTeam, updateTeam, findTeamById, deleteTeamById };