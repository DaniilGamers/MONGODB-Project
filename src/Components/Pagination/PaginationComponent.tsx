import React from 'react';
import css from "../MovieList/MovieList.module.css"
import {useNavigate} from "react-router-dom";

interface Props {

    currentPage: number;
    basePath: string;
    total_pages: number;

}

const PaginationComponent: React.FC<Props> = ({ currentPage, basePath, total_pages }) => {

    const navigate = useNavigate()

    const PageHandler = (newPage: number) => {

        String(newPage)

        navigate(`${basePath}?page=${newPage}`)

    }

    return (
        <div className={css.PageButtonsBox}>
            <button className={css.PageButtonBox} onClick={() => PageHandler(currentPage - 1)} disabled={currentPage <= 1}><h2>prev</h2>
            </button>

            <button className={css.PageNumberBox} disabled={true}>{currentPage}</button>

            <button className={css.PageButtonBox} onClick={() => PageHandler(currentPage + 1)} disabled={currentPage >= total_pages}><h2>next</h2>
            </button>
        </div>
    );
};

export default PaginationComponent;