import React from 'react';
import Header from "../Components/header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
    return (
        <div>

            <Header/>
                <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default HomePage;