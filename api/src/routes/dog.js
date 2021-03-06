const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  const {
    name,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    life,
    photo,
    origin,
    temperament
  } = req.body;

  let newBreed = await Dog.create({
    name: name,
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWeight: minWeight,
    maxWeight: maxWeight,
    life: life,
    photo: photo,
    origin: origin,
  });

  let temps = await Temperament.findAll({
    where: {
      name: temperament
    }
  });

  newBreed.addTemperament(temps);
  res.status(newBreed);
});

module.exports = router;
