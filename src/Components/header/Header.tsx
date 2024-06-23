import React from 'react';
import {Link} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (<div>
        <div className={css.HeaderMainBox}>
            <div className={css.HeaderBox}>
            <div className={css.logoBox}><Link to={''}>MONGODB</Link></div>
            <div className={css.OptionBox}>
                <ul className={css.LinkButtonsHeader}><Link to={'movies'}>Movies</Link></ul>
                <ul className={css.LinkButtonsHeader}><Link to={'genres'}>Genres</Link></ul>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Header;