import React from 'react'
import { Link } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSort = (e) => {
    setFilter({ ...filter, sortBy: e.target.name });
  };
    
        return (
            <div className={s.container}>
              <h1 className={s.title}>Woof <span>zone</span></h1>
              
              <div className={s.filterBtnContainer}>
                <label>Sort by</label>
                <div className={s.az}>
                <button className={s.btn} name="A_Z" onClick={handleSort}>
                  A - Z
                </button>
                <button className={s.btn} name="Z_A" onClick={handleSort}>
                  Z - A
                </button>
              
                </div>
               <div className={s.heavier}>
               <button className={s.btn} name="LIGHTER" onClick={handleSort}>
                  Lighter
                </button>
               <button className={s.btn} name="HEAVIER" onClick={handleSort}>
                  Heavier
                </button>
              
               </div>
              
              </div >
              <div className={s.createBtnContainer}>
              <button className={s.btn} name="CUSTOM_BREED" onClick={handleSort}>
                  Custom breed
                </button>
                <Link to="/create-breed">
                  <button className={s.btn}>Create own breed!</button>
                </Link>
              </div>
              <div className={s.filterInputsContainer}>
                <input
                  className={s.filterInputs}
                  name="name"
                  value={filter.breed}
                  onChange={handleChange}
                
                  placeholder="Search for breed"
                />
                <input
                  className={s.filterInputs}
                  name="temperament"
                  value={filter.temperament}
                  onChange={handleChange}
                
                  placeholder="Filter by temperament"
                />
              </div>
            </div>
          );
    
}

export default Nav
