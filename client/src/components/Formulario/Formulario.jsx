import React from "react";
import { Link, useHistory} from "react-router-dom";
import s from "./Formulario.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const validateForm = (form) => {
  let errors = {
    hasErrors: false,
  };

  if (!/^[a-zA-Z ]+$/.test(form.name)) {
    errors.name = "Name must be only characters";
    errors.hasErrors = true;
  } else if (!/^[a-zA-Z ]+$/.test(form.origin)) {
    errors.origin = "Origin must be onlye characters";
    errors.hasErrors = true;
  } else if (!/^[0-9]+$/.test(form.minHeight)) {
    errors.minHeight = "Height must be a positive number";
    errors.hasErrors = true;
  } else if (!/^[0-9]+$/.test(form.maxHeight)) {
    errors.maxHeight = "Height must be a positive number";
    errors.hasErrors = true;
  } else if (!/^[0-9]+$/.test(form.minWeight)) {
    errors.minWeight = "Weight must be a positive number";
    errors.hasErrors = true;
  } else if (!/^[0-9]+$/.test(form.maxWeight)) {
    errors.maxWeight = "Weight must be a positive number";
    errors.hasErrors = true;
  } else if (!/^[0-9]+$/.test(form.life)) {
    errors.life = "Life span must be a positive number";
    errors.hasErrors = true;
  } else if (!/^[a-zA-Z ]+$/.test(form.bredFor)) {
    errors.bredFor = "Must have only characters";
    errors.hasErrors = true;
  } else if (form.temperament.length < 1) {
    errors.temperament = "Choose at least one temperament";
    errors.hasErrors = true;
  }

  return errors;
};






const Formulario = () => {
 const history = useHistory()
  const [newBreed, setNewBreed] = useState({
    name: "",
    origin: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life: "",
    bredFor: "",
    temperament: [],
  });
  const [page, setPage] = useState(1);
  const [addTemp, setAddTemp] = useState([]);
  const [errors, setErrors] = useState({ hasErrors: true });

  const temperamentList = useSelector((state) => state.temperaments);

 

  const handleChanges = (e) => {
    setNewBreed({ ...newBreed, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...newBreed, [e.target.name]: e.target.value }));
  };

  const handleAddTemp = (e) => {
    const temp = e.target.value;
    if (newBreed.temperament.includes(temp)) {
      const i = newBreed.temperament.indexOf(temp);
      setNewBreed({
        ...newBreed,
        [newBreed.temperament]: newBreed.temperament.splice(i, 1),
      });
    } else {
      setNewBreed({
        ...newBreed,
        [newBreed.temperament]: newBreed.temperament.push(temp),
      });
    }
    setErrors(validateForm({ ...newBreed, [e.target.name]: e.target.value }));
  };

  const submitBreed = async (e) => {
    e.preventDefault();
   
    
   
      setNewBreed({
        name: "",
        origin: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        life: "",
        bredFor: "",
        temperament: [],
      });
      alert("Breed created");
      setErrors({ ...errors, hasErrors: true });
      history.push('/home');
      await axios.post("http://localhost:3002/dog", newBreed);
  };
  useEffect(() => {
    setAddTemp(temperamentList.slice(page * 9 - 9, page * 9));
  }, [page, temperamentList]);

  return (
    
    <div className={s.background}>
      <h2>Create Breed</h2>
      <form className={s.wrapper} onSubmit={submitBreed}>
        <div className={s.formContainer}>
          <input
            className={errors.name ? s.inputHasErrors : s.formInputs}
            type="text"
            name="name"
            value={newBreed.name}
            onChange={handleChanges}
            placeholder="Breed name"
          />
          {errors.name && <p className={s.textHasErrors}>{errors.name}</p>}
          <input
            className={errors.origin ? s.inputHasErrors : s.formInputs}
            type="text"
            name="origin"
            value={newBreed.origin}
            onChange={handleChanges}
            placeholder="Breed origin"
          />
          {errors.origin && <p className={s.textHasErrors}>{errors.origin}</p>}
          <input
            className={errors.minHeight ? s.inputHasErrors : s.formInputs}
            type="text"
            name="minHeight"
            value={newBreed.minHeight}
            onChange={handleChanges}
            placeholder="Min height (cm)"
          />
          {errors.minHeight && (
            <p className={s.textHasErrors}>{errors.minHeight}</p>
          )}
          <input
            className={errors.maxHeight ? s.inputHasErrors : s.formInputs}
            type="text"
            name="maxHeight"
            value={newBreed.maxHeight}
            onChange={handleChanges}
            placeholder="Max height (cm)"
          />
          {errors.maxHeight && (
            <p className={s.textHasErrors}>{errors.maxHeight}</p>
          )}
          <input
            className={errors.minWeight ? s.inputHasErrors : s.formInputs}
            type="text"
            name="minWeight"
            value={newBreed.minWeight}
            onChange={handleChanges}
            placeholder="Min weight (kg)"
          />
          {errors.minWeight && (
            <p className={s.textHasErrors}>{errors.minWeight}</p>
          )}
          <input
            className={errors.maxWeight ? s.inputHasErrors : s.formInputs}
            type="text"
            name="maxWeight"
            value={newBreed.maxWeight}
            onChange={handleChanges}
            placeholder="Max weight (kg)"
          />
          {errors.maxWeight && (
            <p className={s.textHasErrors}>{errors.maxWeight}</p>
          )}
          <input
            className={errors.life ? s.inputHasErrors : s.formInputs}
            type="text"
            name="life"
            value={newBreed.life}
            onChange={handleChanges}
            placeholder="Life span (years)"
          />
          {errors.life && <p className={s.textHasErrors}>{errors.life}</p>}
          <input
            className={errors.bredFor ? s.inputHasErrors : s.formInputs}
            type="text"
            name="bredFor"
            value={newBreed.bredFor}
            onChange={handleChanges}
            placeholder="Bred for"
          />
          {errors.bredFor && (
            <p className={s.textHasErrors}>{errors.bredFor}</p>
          )}
        </div>
        <div className={s.tempWrapper}>
          <textarea
            className={
              errors.temperament ? s.tempsInputHasErrors : s.tempsInput
            }
            name="temperamentList"
            readOnly
            value={newBreed.temperament.toString()}
            placeholder="Temperaments"
          />
          {errors.temperament && (
            <p className={s.textHasErrors}>{errors.temperament}</p>
          )}
          <div className={s.tempBtnWrapper}>
            {addTemp.map((temp) => {
              return (
                <button
                  key={temp.id}
                  type="button"
                  className={s.tempBtn}
                  name={temp.name}
                  value={temp.name}
                  onClick={handleAddTemp}
                >
                  {temp.name}
                </button>
              );
            })}
          </div>
          <div className={s.pageBtnContainer}>
            <button
              type="button"
              className={page < 2 ? s.tempDisabledPageBtn : s.tempPageBtn}
              disabled={page < 2}
              onClick={() => setPage(page - 1)}
            >
              {page - 1}
            </button>
            <button type="button" className={s.tempDisabledPageBtn} disabled>
              {page}
            </button>
            <button
              type="button"
              className={
                addTemp.length < 9 ? s.tempDisabledPageBtn : s.tempPageBtn
              }
              disabled={addTemp.length < 9}
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </button>
          </div>
        </div>
        <div className={s.btnContainer}>
          <button
            className={errors.hasErrors ? s.myButtondisabled : s.myButton}
            disabled={errors.hasErrors}
          >
            CREATE BREED!
          </button>
          <Link to="/home">
            <button type="button" className={s.myButton}>
              BACK
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
