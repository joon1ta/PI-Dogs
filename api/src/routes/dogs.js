const {Router} = require('express');
const {getBreeds} = require('../controllers/controllers');

const router = Router()

router.get('/', async (req, res) => {
    const breeds = await getBreeds();
    const {name} = req.query
    
    let breed = []
   
    
    for (let i = 0; i < breeds.length; i++) {
        
        if(breeds[i].name.toLowerCase() === name.toLowerCase()) {
           
            breed.push(breeds[i])
        }
    }


    // let breed = breeds.filter(breed => breed.name === name); 
      
         if(breed.length > 0) {
             res.send(breed);
         } else {  
             res.status(404).send('Breed not found');
         }
      
    
    res.status(200).send(breeds);
})


router.get('/:breedId', async (req, res) => {
    const breeds = await getBreeds();
    const {breedId} = req.params
    let breed = breeds.filter(breed => breed.id.toString() === breedId);
    
    if(breed.length > 0) return res.status(200).send(breed)
    res.status(404).send('Sorry we cant show that breed')
})

module.exports = router;