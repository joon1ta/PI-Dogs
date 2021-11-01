import React from 'react'
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={s.wrapper}>
            Soy la landing
            <Link to='/home'>
<button>Enter</button>
</Link>
           
        </div>
    )
}

export default LandingPage
