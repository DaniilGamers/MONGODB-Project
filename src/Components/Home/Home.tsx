import React from 'react';
import css from './Home.module.css'
const Home = () => {
    return (
        <div id={css.welcomeBox}>
            <p>Welcome!!!</p>
            <p style={{fontSize: 40}}>Here you can find films which you want to check out<br/>
            Through genre selection or search through<br/>
            Make yourself cozy here :)</p>
        </div>
    );
};

export default Home;