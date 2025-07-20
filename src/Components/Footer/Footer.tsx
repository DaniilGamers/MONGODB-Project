import React, {useContext} from 'react';
import css from '../Footer/footer.module.css'
import {ThemeContext} from "../../Redux/context/ThemeContext";

const Header = () => {

    const {isDark, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={css.FooterMainBox} data-theme={isDark ? "dark" : "light"} onChange={toggleTheme}>
            <div className={css.FooterBox}>
                <div className={css.logoBox}>MONGODB</div>
                <div className={css.OptionBox}>
                    <div className={css.textProject}>Test Project Site by Daniel</div>
                </div>
            </div>
        </div>
    );
};

export default Header;