import React from 'react';
import css from "../MovieList/MovieList.module.css"
import {useNavigate} from "react-router-dom";

interface Props {

    currentPage: number;
    basePath: string;

}

const PaginationComponent: React.FC<Props> = ({ currentPage, basePath }) => {

    const navigate = useNavigate()

    const PageHandler = (newPage: number) => {

        String(newPage)

        navigate(`${basePath}?page=${newPage}`)

    }

    return (
        <div className={css.PageButtonsBox}>
            <button style={{backgroundColor: "royalblue", borderColor: "royalblue", color: "white"}} className={css.PageButtonBox} onClick={() => PageHandler(currentPage - 1)} disabled={currentPage <= 1}><h2>prev</h2>
            </button>

            <button style={{backgroundColor: "royalblue", borderColor: "royalblue", color: "white", borderRadius: 10}} className={css.PageNumberBox} disabled={true}>{currentPage}</button>

            <button style={{backgroundColor: "royalblue", borderColor: "royalblue", color: "white"}} className={css.PageButtonBox} onClick={() => PageHandler(currentPage + 1)}><h2>next</h2>
            </button>
        </div>
    );
};

export default PaginationComponent;