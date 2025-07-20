import React, {useContext} from 'react';
import css from './Header.module.css'
import {Link} from "react-router-dom";
import {ThemeContext} from "../../Redux/context/ThemeContext";
import cssToggle from '../themes/Themes.module.css'
import UserInfo from "../User/UserInfo";

const Header = () => {


    const {isDark, toggleTheme } = useContext(ThemeContext)
    
    return (<div>
        <div className={css.HeaderMainBox} data-theme={isDark ? "dark" : "light"}>
            <div className={css.HeaderBox}>
            <div className={css.logoBox}><Link to={''}>MONGODB</Link></div>
                <div className={css.OptionBox}>
                    <div className={css.LinkButtonsHeader}><Link to={'movies?page=1'}>Movies</Link></div>
                    <div className={css.LinkButtonsHeader}><Link to={'genres'}>Genres</Link></div>
                    <div className={css.LinkButtonsHeader}><Link to={'search'}>Search</Link></div>
                    <div><div className={cssToggle.ToggleBox}><div className={cssToggle.circle}><input type="checkbox" className={cssToggle.toggle} onChange={toggleTheme} id={"check"}/>Dark mode
                        <label htmlFor={"check"}></label></div></div></div>
                    <div><UserInfo/></div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;