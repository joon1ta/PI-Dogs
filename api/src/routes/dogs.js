const {Router} = require('express');
const {getDogsBreeds} = require('../controllers/controllers');

const router = Router()

router.get('/', async (req, res) => {
    const breeds = await getDogsBreeds();
    if(req.query.name) {
        let breed = await breeds.filter(breed => {
            breed.name.toLowerCase().includes(req.query.name.toLowerCase())
        })
        if(breed.length > 0) res.status(200).send(breed);
        res.status(404).send('Breed not found');
    }
    res.status(200).send(breeds);
})


module.exports = router;