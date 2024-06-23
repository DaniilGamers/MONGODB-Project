import React from 'react';
import Header from "./Components/header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./Components/header/Footer";

const App = () => {

    return (
        <div>
          <Header/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default App;