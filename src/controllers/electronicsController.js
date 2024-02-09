const electronicsService = require('../services/electronicsService');

const { getErrorMessage } = require('../utils/errorUtils');


const router = require('express').Router();

router.get('/create', (req,res)=>{
    res.render('electronics/create');
});

router.post('/create', async(req,res)=>{
    const electronicsData = req.body;
    electronicsData.owner = req.user._id

    try {
        await electronicsService.create(electronicsData);
        res.redirect('/');
    } catch (error) {
        res.render('electronics/create', {error: getErrorMessage(error)})
    }
})

module.exports = router;