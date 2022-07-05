var path = require('path')

module.exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource' });
        // res.sendFile(path.join(__dirname + '../../static/main/css/index.css'));
        // res.sendFile(path.join(__dirname + '../../static/main/main.html'));
        
    }
}

module.exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin.' });
    }
}