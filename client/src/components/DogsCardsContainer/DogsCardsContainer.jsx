import React from 'react'
import s from './DogsCardsContainer.module.css'
const DogsCardsContainer = ({id,name,minWeight,maxWeight,photo,temperament}) => {
    
    
    return (
        <div className={s.wrapper}>
           <div className={s.wrapperImg}>
               <img  width="100%" height="250px"src={photo} alt="Dog" />
           </div>
           <div className={s.wrapperTitles}>
               <h2 className={s.h2}>{name}</h2>
               <p className={s.p}>Weight: {minWeight} - {maxWeight} Kilos</p>
           </div>
           <div className={s.wrapperTemperament}>
           <h3 className={s.h3}>{temperament?.join(' | ')}</h3>
           </div>
        </div>
    )
}

export default DogsCardsContainer
