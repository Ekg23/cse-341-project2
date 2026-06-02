const authenticate = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json("You do not have access to this resource");
    }
};

module.exports = authenticate;