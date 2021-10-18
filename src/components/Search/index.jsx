import React from 'react';
import classes from './Search.module.css'

const Search = ({filter, setFilter}) => {
    const searchHandler = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div className={classes.search}>
            <input onChange={searchHandler} value={filter} className={classes.input} type="text" placeholder="Поиск..."/>
            <button className={classes.btn}>
                <i className="fas fa-search"/>
            </button>
        </div>
    );
};

export default Search;