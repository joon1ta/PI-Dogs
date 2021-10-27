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
        height: breed.height.metric,
        weight: breed.weight.metric,
        life: breed.life_span,
        origin: breed.origin,
        bredFor: breed.bred_for,
        breedGroup: breed.breed_group,
        temperament: breed.temperament?.split(",").map((temp) => temp.trim()),
      };
    });
    console.log(mapData);
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


module.exports = {
    getDogsBreeds,
    getDbDogsBreeds
}


