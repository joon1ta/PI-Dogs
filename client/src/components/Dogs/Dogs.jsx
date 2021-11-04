import React, { useEffect,useState } from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import DogsCardscontainer from '../DogsCardsContainer/DogsCardsContainer'
import s from './Dogs.module.css'

const Dogs = ({filter}) => {

const breeds = useSelector(state => state.breeds)

const [page, setPage] = useState(1);
  const [length, setLength] = useState(0);
  const [filteredBreeds, setFilteredBreeds] = useState([]);

const filterFunction = () => {
    // Mover el filtro de temperamento a un nuevo componente y manejarlo como arrays.
    let filtBreeds = breeds.filter(
      (breed) =>
        breed.name.toUpperCase().includes(filter.name.toUpperCase()) &&
        breed.temperament
          ?.join(", ")
          .toUpperCase()
          .includes(filter.temperament.toUpperCase())
    );

    if (filter.sortBy === "A_Z") {
      filtBreeds = filtBreeds.sort((a, b) =>
        a.name[0].toUpperCase() > b.name[0].toUpperCase()
          ? 1
          : a.name[0].toUpperCase() < b.name[0].toUpperCase()
          ? -1
          : 0
      );
    }

    if (filter.sortBy === "Z_A") {
      filtBreeds = filtBreeds
        .sort((a, b) =>
          a.name[0].toUpperCase() > b.name[0].toUpperCase()
            ? 1
            : a.name[0].toUpperCase() < b.name[0].toUpperCase()
            ? -1
            : 0
        )
        .reverse();
    }

    if (filter.sortBy === "LIGHTER") {
      filtBreeds = filtBreeds.sort((a, b) =>
        a.maxWeight > b.maxWeight ? 1 : a.maxWeight < b.maxWeight ? -1 : 0
      );
    }

    if (filter.sortBy === "HEAVIER") {
      filtBreeds = filtBreeds
        .sort((a, b) =>
          a.maxWeight > b.maxWeight ? 1 : a.maxWeight < b.maxWeight ? -1 : 0
        )
        .reverse();
    }

    if (filter.sortBy === "CUSTOM_BREED") {
      filtBreeds = filtBreeds.filter((breed) =>
        breed.hasOwnProperty("original")
       
      );
     
    }
    setLength(filtBreeds.length);
    setFilteredBreeds(filtBreeds.slice(page * 8 - 8, page * 8));
};



useEffect(filterFunction, [breeds, page, filter]);

useEffect(() => {
    setPage(1);
  }, [filter]);

if(filteredBreeds < 1) {
  return (
    <div className={s.wrapperLoading}>
      <h2>No data to Show</h2>
    </div>
  )
}


return (
        <div className={s.wrapper}>
            
            { 
                filteredBreeds.map(breed => {
                    return (
                        <Link className={s.link} key={breed.id} to={`/dogdetail/${breed.id}`}>
                        <DogsCardscontainer 
                        key={breed.id}
                        name={breed.name} 
                        minHeight={breed.minHeight}
                        maxHeight={breed.maxHeight}
                        minWeight={breed.minWeight}
                        maxWeight={breed.maxWeight}
                        id={breed.id}
                        photo={breed.photo}
                        temperament={breed.temperament}
                        />
                        </Link>
                    
                    
                    )
                    })
            }

<div className={s.paginate}>
        <button
          className={page < 2 ? s.pagDisabledBtn : s.pagBtn}
          disabled={page < 2}
          onClick={() => setPage(1)}
        >
          {"<<"}
        </button>
        <button
          className={page < 2 ? s.pagInvisibleBtn : s.pagBtn}
          disabled={page < 2}
          onClick={() => setPage(page - 1)}
        >
          {page - 1}
        </button>
        <button className={s.pagDisabledBtn} disabled>
          {page}
        </button>
        <button
          className={filteredBreeds.length < 8 ? s.pagInvisibleBtn : s.pagBtn}
          disabled={filteredBreeds.length < 8}
          onClick={() => setPage(page + 1)}
        >
          {page + 1}
        </button>
        <button
          className={filteredBreeds.length < 8 ? s.pagDisabledBtn : s.pagBtn}
          disabled={filteredBreeds.length < 8}
          onClick={() => setPage(Math.ceil(length / 8))}
        >
          {">>"}
        </button>
      </div>
        </div>
    )
}

export default Dogs
