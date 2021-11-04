import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import s from './DogDetail.module.css'
const DogDetail = () => {
  const { id } = useParams();
  const [breed, setBreed] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(breed);
  useEffect(() => {
    try {
      const getDetailBreed = async () => {
        let { data: breed } = await axios.get(
          `http://localhost:3002/dogs/${id}`
        );
        setBreed(breed);
        setLoading(false);
      };
      getDetailBreed();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (loading) {
    return <div className={s.wrapperLoading}>
            <h1>Loading Breed. . .</h1>
          </div>
     
  }
  console.log(breed[0].temperament);

  return (
    <div className={s.wrapper}>
      <h2 className={s.h2}>{breed[0].name || "Unknow"}</h2>
      <div className={s.wrapperImg}>
        <img width="100%" height="300px" src={breed[0].photo} alt="Dog" />
      </div>
      <div className={s.wrapperOrigin}>
        <h3 className={s.h3}>Breed Origins</h3>
        <p className={s.p}>{breed[0].origin || "Unknow"}</p>
      </div>
      <div className={s.wrapperDetail}>
        <h3 className={s.h3}>Breed Details</h3>
        <p className={s.p}>
          <span>Weight:</span> {breed[0].minWeight} - {breed[0].maxWeight} Kilos
        </p>
        <p className={s.p}>
          <span>Height:</span> {breed[0].minHeight} - {breed[0].maxHeight} Cms
        </p>
        <p className={s.p}>
          <span>BredFor:</span> {breed[0].bredFor || "Unknow"}
        </p>
        <p className={s.p}>
          <span>Breed Group:</span> {breed[0].breedGroup || "Unknow"}
        </p>
        <p className={s.p}>
          <span>Years of life:</span> {breed[0].life || "Unknow"}
        </p>
      </div>
      <div className={s.wrapperTemperament}>
        <h3 className={s.h3}>
          Breed Temperaments:{" "}
          <span>{breed[0].temperament.join(" | ") || "Unknow"}</span>
        </h3>
      </div>
      <Link className={s.link} to="/home">
        <button className={s.myButton}>Back to Home</button>
      </Link>
    </div>
  );
};

export default DogDetail;
