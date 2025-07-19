import React, {FormEvent} from 'react';
import css from './search.module.css'
import {useNavigate} from "react-router-dom";

const Search = () => {


    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const form = e.target as HTMLFormElement;
        const result = form.keyword.value

        navigate(`/search/${result}/:keywordId/?page=1`)
        console.log(result)
    }

    return (
        <div id={css.searchBoxMain}>

            <p>Search</p>

            <form onSubmit={handleSubmit}>

                <label>

                    <input id={css.inputBox} placeholder={'Type here to search for movies'} name={'keyword'} type={"search"}/>

                </label>

            </form>
        </div>
    );
};

export default Search;