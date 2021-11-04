import React from "react";
import Dogs from "../Dogs/Dogs";
import Nav from "..//Nav/Nav";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBreeds, getTemperaments } from "../../redux/actions/index";
import s from './Home.module.css';

const Home = () => {
 
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
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
      <Nav filter={filter} setFilter={setFilter} />
      <Dogs filter={filter} />
    </div>
  );
};

export default Home;
