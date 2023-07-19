const validateTeam = (req, _res, next) => {
    const requiredFields = ['name', 'initials'];
    const team = { ...req.body };
    if (requiredFields.every((required) => required in team)) {
        next();
    } else {
        next({ status: 400, message: 'error in the fields!' });
    }
};

module.exports = validateTeam;
