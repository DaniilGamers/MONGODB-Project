import React from 'react';
import Search from "../Components/Search/Search";
import {Outlet} from "react-router-dom";

const SearchPage = () => {
    return (
        <div>
            <Search/>
            <Outlet/>
        </div>
    );
};

export default SearchPage;