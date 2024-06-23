import React from 'react';
import css from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.HeaderMainBox}>
            <div className={css.HeaderBox}>
                <div className={css.logoBox}>MONGODB</div>
                <div className={css.OptionBox}>
                    <ul style={{justifyContent: "right", display: "flex", color: "white", width: 480}}>Test Project Site by Daniel</ul>
                </div>
            </div>
        </div>
    );
};

export default Header;