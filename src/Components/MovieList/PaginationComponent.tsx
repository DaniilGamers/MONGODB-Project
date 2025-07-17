import React from 'react';
import css from "./MovieList.module.css"
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../Redux/store";

const PaginationComponent = () => {

    const totalPages = useAppSelector((state) => state.movie.total_Pages)

    const [query, setQuery] = useSearchParams({page:'1'})


    let currentPage = query.get('page')

    const navigatePrevPage = () => {

        const page = query.get('page')

        if (page){

            let currentPage = +page;

            currentPage--;

            if (currentPage === 0){

                currentPage++;

            }

            setQuery({page: currentPage.toString()})

        }

    }

    const navigateNextPage = () => {

        const page = query.get('page')

        if (page){

            let currentPage = +page;

            currentPage++;

            if (currentPage > totalPages){

                currentPage--;

            }

            setQuery({page: currentPage.toString()})

        }

    }

    return (
        <div className={css.PageButtonsBox}>
            <button style={{backgroundColor: "royalblue", borderColor: "royalblue", color: "white"}} className={css.PageButtonBox} onClick={navigatePrevPage}><h2>prev</h2>
            </button>

            <button style={{backgroundColor: "royalblue", borderColor: "royalblue", color: "white", borderRadius: 10}} className={css.PageNumberBox} disabled={true}>{currentPage}</button>

            <button style={{backgroundColor: "royalblue", borderColor: "royalblue", color: "white"}} className={css.PageButtonBox} onClick={navigateNextPage}><h2>next</h2>
            </button>
        </div>
    );
};

export default PaginationComponent;