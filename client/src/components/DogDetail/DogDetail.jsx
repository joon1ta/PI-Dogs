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
  console.log(breed[0].temperament)
  return (
    <div>
      <h2>{breed[0].name}</h2>
      <div>
          <img src={breed[0].photo} alt='Dog' />
      </div>
      <div>
          <p>Weight: {breed[0].weight} Kilos</p>
          <p>Height: {breed[0].height} Mts</p>
      </div>
      <Link to="/home">
        <button>volver</button>
      </Link>
    </div>
  );
};

export default DogDetail;
