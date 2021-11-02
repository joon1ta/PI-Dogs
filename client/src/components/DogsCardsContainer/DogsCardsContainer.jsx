import React from 'react'
import s from './DogsCardsContainer.module.css'
const DogsCardsContainer = ({id,name,minWeight,maxWeight,photo,temperament}) => {
    
    
    return (
        <div className={s.wrapper}>
           <div className={s.wrapperImg}>
               <img  width="100%" height="300px"src={photo} alt="Dog" />
           </div>
           <div className={s.wrapperTitles}>
               <h3>Breed name: {name}</h3>
               <p>Weight: {minWeight} - {maxWeight} Kilos</p>
           </div>
           <div className={s.wrapperTemperament}>
               Temperaments: {temperament?.join(' | ')}
           </div>
        </div>
    )
}

export default DogsCardsContainer
