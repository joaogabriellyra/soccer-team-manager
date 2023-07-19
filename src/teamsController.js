const fs = require('fs').promises;
const path = require('path');
const { OK, CREATED } = require('./utils/status');

const TEAMS_DATA_PATH = './data/teams.json';

const findAllTeams = async (_req, res, next) => {
    try {
        const data = await fs.readFile(path.resolve(__dirname, TEAMS_DATA_PATH));
        const teams = JSON.parse(data);
        res.status(OK).json({ teams });
    } catch (error) {
        return next(error);
    }
};

const newTeam = async (req, res, next) => {
    try {
        const data = await fs.readFile(path.resolve(__dirname, TEAMS_DATA_PATH));
        const teams = JSON.parse(data);
        const team = { id: teams.length + 1, ...req.body };
        teams.push(team);
        await fs.writeFile(path.resolve(__dirname, TEAMS_DATA_PATH), JSON.stringify(teams));
        res.status(CREATED).send(team);
    } catch (error) {
        return next(error);
    }
};

const updateTeam = async (req, res, next) => {
    const { id } = req.params;
    const { name, initials } = req.body;
    try {
        const data = await fs.readFile(path.resolve(__dirname, TEAMS_DATA_PATH));
        const teams = JSON.parse(data);
        const teamToUpdate = teams.find((team) => team.id === Number(id));
        teamToUpdate.name = name;
        teamToUpdate.initials = initials;

        await fs.writeFile(path.resolve(__dirname, TEAMS_DATA_PATH), JSON.stringify(teams));

        res.status(OK).json({ teamToUpdate });      
    } catch (error) {
        return next(error);
    }
};

const findTeamById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const data = await fs.readFile(path.resolve(__dirname, TEAMS_DATA_PATH));
        const teams = JSON.parse(data);
        const teamById = teams.find((team) => team.id === Number(id));
        console.log('hi');
        res.status(OK).json(teamById);      
    } catch (error) {
        return next(error);
    }
};

const deleteTeamById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await fs.readFile(path.resolve(__dirname, TEAMS_DATA_PATH));
        const teams = JSON.parse(data);
        const arrayPosition = teams.findIndex((team) => team.id === Number(id));
        teams.splice(arrayPosition, 1);

        await fs.writeFile(path.resolve(__dirname, TEAMS_DATA_PATH), JSON.stringify(teams));
          
        res.status(OK).end();
    } catch (error) {
        return next(error);
    }
};

module.exports = { findAllTeams, newTeam, updateTeam, findTeamById, deleteTeamById };