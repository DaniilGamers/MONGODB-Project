import React from 'react';
import Header from "../Components/header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import {ThemeProvider} from "../Redux/context/ThemeContext";

const HomePage = () => {
    return <div>
        <ThemeProvider>
        <Header/>
            <Outlet/>
        <Footer/>
        </ThemeProvider>
    </div>;
};

export default HomePage;