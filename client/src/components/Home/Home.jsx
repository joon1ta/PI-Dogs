import React from "react";
import Dogs from "../Dogs/Dogs";
import Nav from "..//Nav/Nav";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBreeds, getTemperaments } from "../../redux/actions/index";
import s from './Home.module.css';

const Home = () => {
 
  const dispatch = useDispatch();
  const [breedfilter, setBreedFilter] = useState({
    name: "",
    temperament: "",
    sortBy: "",
  });
  useEffect(() => {
    dispatch(getBreeds());
    dispatch(getTemperaments());
  }, [dispatch]);  

  return (
    <div className={s.wrapper}>
      <Nav breedfilter={breedfilter} setBreedFilter={setBreedFilter} />
      <Dogs breedfilter={breedfilter} />
    </div>
  );
};

export default Home;
