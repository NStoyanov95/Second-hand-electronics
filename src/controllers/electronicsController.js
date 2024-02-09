const electronicsService = require('../services/electronicsService');

const { getErrorMessage } = require('../utils/errorUtils');


const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('electronics/create');
});

router.post('/create', async (req, res) => {
    const electronicsData = req.body;
    electronicsData.owner = req.user._id

    try {
        await electronicsService.create(electronicsData);
        res.redirect('/electronics/catalog');
    } catch (error) {
        res.render('electronics/create', { error: getErrorMessage(error) })
    }
});

router.get('/catalog', async (req, res) => {
    const electronics = await electronicsService.getAll().lean();
    res.render('electronics/catalog', { electronics });
})

module.exports = router;