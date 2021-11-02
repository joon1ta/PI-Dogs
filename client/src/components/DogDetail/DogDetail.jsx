import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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
    return <h1>Loading Breed</h1>;
  }
  console.log(breed[0].temperament);

  return (
    <div>
      <h2>{breed[0].name || "Unknow"}</h2>
      <div>
        <img width="100%" height="300px" src={breed[0].photo} alt="Dog" />
      </div>
      <div>
        <h3>Breed Origins</h3>
        <p>{breed[0].origin || "Unknow"}</p>
      </div>
      <div>
        <h3>Breed Details</h3>
        <p>
          <span>Weight:</span> {breed[0].minWeight} - {breed[0].maxWeight} Kilos
        </p>
        <p>
          <span>Height:</span> {breed[0].minHeight} - {breed[0].maxHeight} Cms
        </p>
        <p>
          <span>BredFor:</span> {breed[0].bredFor || "Unknow"}
        </p>
        <p>
          <span>Breed Group:</span> {breed[0].breedGroup || "Unknow"}
        </p>
        <p>
          <span>Years of life:</span> {breed[0].life || "Unknow"}
        </p>
      </div>
      <div>
        <h3>
          <span>Breed Temperaments:</span>{" "}
          {breed[0].temperament.join(" | ") || "Unknow"}
        </h3>
      </div>
      <Link to="/home">
        <button>volver</button>
      </Link>
    </div>
  );
};

export default DogDetail;
