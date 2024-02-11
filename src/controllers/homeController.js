const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/404', (req, res) => {
    res.render('404');
});

router.get('/search', isAuth, (req, res) => {
    res.render('search');
})

module.exports = router;