const {Router} = require('express');
const {Dog, Temperament} = require('../db');
const router = Router();


router.post('/', async (req, res) => {
    const {
        name,
        height,
        weigth,
        life,
        photo,
        origin
    } = req.body


    let newBreed = await Dog.create({
        name: name,
        height: height,
        weigth: weigth,
        life: life,
        photo: photo,
        origin: origin
    })

    let temperaments = await Temperament.findAll({
        where: {
            name: temperament
        }
    })

    newBreed.addTemperament(temperaments);
    res.status(newBreed)
})

module.exports = router;