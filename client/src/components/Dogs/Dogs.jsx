import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreeds } from '../../redux/actions/index'
import { Link } from 'react-router-dom'
import DogsCardscontainer from '../DogsCardsContainer/DogsCardsContainer'
import s from './Dogs.module.css'
const Dogs = () => {

const breeds = useSelector(state => state.breeds)
const dispatch = useDispatch()
const [current, setCurrent] = useState(0)
const [dogsPerPage, setDogsPerPage] = useState(8)

const nextPage = () => {
    if(current < breeds.length) {
        setCurrent(current + 10)
        setDogsPerPage(dogsPerPage + 10)
    } else if(current > breeds.length || dogsPerPage > breeds.length) {
        setCurrent(0)
        setDogsPerPage(8)
    }
}
const prevPage = () => {
    setCurrent(current - 10)
    setDogsPerPage(dogsPerPage - 10)
}




useEffect(() => {
       
dispatch(getBreeds())       

},[dispatch])

    return (
        <div className={s.wrapper}>
            
            {
                breeds?.map(breed => {
                    return (
                        <Link key={breed.id} to={`/dogdetail/${breed.id}`}>
                        <DogsCardscontainer 
                        key={breed.id}
                        name={breed.name} 
                        weight={breed.weight}
                        id={breed.id}
                        photo={breed.photo}
                        temperament={breed.temperament}
                        />
                        </Link>
                    
                    
                    )
                    }).slice(current, dogsPerPage)
            }

            <div>
                <button className={s.btnPage} onClick={prevPage}>&lt; Prev Page</button>
                <button className={s.btnPage} onClick={nextPage}>Next Page &gt;</button>
            </div> 
        </div>
    )
}

export default Dogs
