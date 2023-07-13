const app = require('./app');
const { OK } = require('./utils/status');
const { findAllTeams, newTeam, updateTeam, findTeamById, 
    deleteTeamById } = require('./teamsController');

app.get('/', (req, res) => res.status(OK).json({ message: 'Hello World.' }));
app.get('/teams', findAllTeams);
app.post('/teams', newTeam);
app.put('/teams/:id', updateTeam);
app.get('/teams/:id', findTeamById);
app.delete('/teams/:id', deleteTeamById);
app.listen(3001, () => console.log('Be welcome my friend Gabriel'));