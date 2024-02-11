const jwt = require('../lib/jwt');
const ENV = require('../utils/constants');

const electronicsService = require('../services/electronicsService');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, ENV.SECRET);
        req.user = decodedToken;
        res.locals.user = decodedToken;
        res.locals.isAuth = true;
        return next();

    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/404');
    }

    next();
};

exports.isOwner = async (req, res, next) => {
    const electronic = await electronicsService.getOne(req.params.electronicsId);
    let user = req.user._id;

    if (user != electronic.owner) {
        return res.redirect('/404');
    }

    return next();
};

exports.isGuest = (req, res, next) => {
    const user = req.user;

    if (!user) {
        return next();
    }

     res.redirect('/404');
};