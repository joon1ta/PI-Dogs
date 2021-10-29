const { Router } = require("express");
const { getTemperaments } = require("../controllers/controllers");

const router = Router();

router.get('/', async (req, res) => {
    const temperaments = await getTemperaments();

    if(temperaments.length < 1) {
        return res.status(404).send('No temperament found');
    }
    res.send(temperaments);
})


module.exports = router;