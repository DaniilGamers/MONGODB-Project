import React, {useContext} from 'react';
import css from './Home.module.css'
import {ThemeContext} from "../../Redux/context/ThemeContext";
const Home = () => {

    const {isDark, toggleTheme } = useContext(ThemeContext)

    return (
        <div id={css.welcomeBox} data-theme={isDark ? 'dark' : 'light'} onChange={toggleTheme}>
            <p>Welcome!!!</p>
            <p style={{fontSize: 40}}>Here you can find films which you want to check out<br/>
            Through genre selection or search through<br/>
            Make yourself cozy here :)</p>
        </div>
    );
};

export default Home;