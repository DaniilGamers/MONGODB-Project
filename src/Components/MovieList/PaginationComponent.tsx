import React, {FC} from 'react';
import css from "./MovieList.module.css"
import {MovieListPageModel} from "../../models/MovieListPageModel";

interface IProps {
    page: MovieListPageModel<number> | null
}
const PaginationComponent = () => {

    return (
        <div className={css.PageButtonsBox}>
            <button style={{backgroundColor: "royalblue", borderColor: "royalblue", color: "white"}} className={css.PageButtonBox} onClick={() => {}}><h2>prev</h2>
            </button>

            <button style={{backgroundColor: "royalblue", borderColor: "royalblue", color: "white", borderRadius: 10}} className={css.PageNumberBox}>{1}</button>

            <button style={{backgroundColor: "royalblue", borderColor: "royalblue", color: "white"}} className={css.PageButtonBox} onClick={() => {}}><h2>next</h2>
            </button>
        </div>
    );
};

export default PaginationComponent;