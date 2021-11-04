const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

const getDogsBreeds = async () => {
  try {
    const dataApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const mapData = await dataApi.data.map((breed) => {
      return {
        id: breed.id,
        name: breed.name,
        origin: breed.origin,
        photo: breed.image.url,
        minHeight: Number(breed.height.metric.split("-")[0] || 0),
        maxHeight: Number(breed.height.metric.split("-")[1] || 0),
        minWeight: Number(breed.weight.metric.split("-")[0] || 0),
        maxWeight: Number(breed.weight.metric.split("-")[1] || 0),
        life: breed.life_span,
        origin: breed.origin,
        bredFor: breed.bred_for,
        breedGroup: breed.breed_group,
        temperament: breed.temperament?.split(",").map((temp) => temp.trim()),
      };
    });
   
    return mapData;
  } catch (error) {
    console.log(error);
  }
};

const getDbDogsBreeds = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

const getBreeds = async () => {
  const apiBreeds = await getDogsBreeds();
  const dbBreeds = await getDbDogsBreeds();
  const mapDbBreed = dbBreeds.map(breed => {
    return {
      id: breed.id,
      name: breed.name,
      original: breed.original,
      minHeight: breed.minHeight,
      maxHeight: breed.maxHeight,
      minWeight: breed.minWeight,
      maxWeight: breed.maxWeight,
      life: breed.life,
      photo: breed.photo,
      origin: breed.origin,
      temperament: breed.temperaments.map(t => t.name)
    }
  })
  const breeds = apiBreeds.concat(mapDbBreed);
  return breeds
}

const getTemperaments = async () => {
  const breeds = await getBreeds();
  breeds.forEach(breed => {
    if(breed.temperament) {
      for (let i = 0; i < breed.temperament.length; i++) {
       Temperament.findOrCreate({
         where: {name: breed.temperament[i].trim()}
       })
        
      }
    }
  })
  return await Temperament.findAll()
}


module.exports = {
    getTemperaments,
    getBreeds
}


