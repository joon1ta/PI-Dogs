import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.wrapperTitle}>
          <h1>Woof zone</h1>
          <h4>Come to know all breeds in the world</h4>
      <Link to="/home" className={s.link}>
        <button className={s.myButton}>Join us</button>
      </Link>   
        </div>
     
    </div>
  );
};

export default LandingPage;
