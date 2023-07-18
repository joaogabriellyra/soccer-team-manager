const validateTeam = (req, res, next) => {
    const requiredFields = ['name', 'initials'];
    const team = { ...req.body };
    if (requiredFields.every((required) => required in team)) {
        next();
    } else {
        res.status(400).json({ message: 'error in the fields!' });
    }
};

module.exports = validateTeam;