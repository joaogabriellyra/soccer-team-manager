const app = require('./app');
const { OK } = require('./utils/status');
const { findAllTeams, newTeam, updateTeam, findTeamById, 
    deleteTeamById } = require('./teamsController');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');

app.get('/', (req, res) => res.status(OK).json({ message: 'Hello World.' }));
app.get('/teams', findAllTeams);
app.post('/teams', validateTeam, newTeam);
app.put('/teams/:id', existingId, validateTeam, updateTeam);
app.get('/teams/:id', existingId, findTeamById);
app.delete('/teams/:id', existingId, deleteTeamById);
app.listen(3001, () => console.log('Be welcome my friend Gabriel'));