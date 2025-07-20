import React, {FormEvent} from 'react';
import css from './search.module.css'
import {useNavigate} from "react-router-dom";

const Search = () => {


    const navigate = useNavigate()

    const handleChange = (e: FormEvent<HTMLInputElement>)=>{
        e.preventDefault()

        const input = e.target as HTMLInputElement;
        const result = input.value

        if (result === ''){

            navigate(`/search`)

        }else{

            navigate(`/search/${result}/?page=1`)
            console.log(result)

        }


    }

    return (
        <div id={css.searchBoxMain}>

            <p>Search</p>

            <form>

                <label>

                    <input id={css.inputBox} placeholder={'Type here to search for movies'} name={'keyword'} type={"search"} onChange={handleChange}/>

                </label>

            </form>
        </div>
    );
};

export default Search;