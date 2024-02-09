const electronicsService = require('../services/electronicsService');

const { getErrorMessage } = require('../utils/errorUtils');
const { isInBuyinglist } = require('../utils/helpers');


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

router.get('/:electronicsId/details', async (req, res) => {
    try {
        const singleElectronic = await electronicsService.getOne(req.params.electronicsId).lean().populate('buyingList');
        const isLogged = req.user;
        const isOwner = req.user?._id == singleElectronic.owner;
        const isBuyer = isInBuyinglist(singleElectronic.buyingList, req.user?._id);

        res.render('electronics/details', { singleElectronic, isLogged, isOwner, isBuyer });
    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/:electronicsId/buy', async (req, res) => {
    try {
        await electronicsService.buy(req.params.electronicsId, req.user._id);
    } catch (error) {
        res.redirect('/404');
    }

    res.redirect(`/electronics/${req.params.electronicsId}/details`)
});

router.get('/:electronicsId/delete', async (req, res) => {
    try {
        await electronicsService.delete(req.params.electronicsId);
        res.redirect('/electronics/catalog');
    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/:electronicsId/edit', async (req, res) => {
    try {
        const singleElectronic = await electronicsService.getOne(req.params.electronicsId).lean();
        res.render('electronics/edit', { singleElectronic });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }
});

router.post('/:electronicsId/edit', async(req,res)=>{
    const electronicData = req.body
    try {
        await electronicsService.update(req.params.electronicsId, electronicData);
        res.redirect(`/electronics/${req.params.electronicsId}/details`);
    } catch (error) {
        console.log(error);

        res.redirect('/404');
    }
})


module.exports = router;