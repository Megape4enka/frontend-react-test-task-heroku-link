import React from 'react';
import Search from "./Search";
import Select from "./Select";

const PostFilter = ({filter, setFilter, select, setSelect}) => {
    return (
        <div className='header'>
            <Search filter={filter} setFilter={setFilter} />
            <Select select={select} setSelect={setSelect}/>
        </div>
    );
};

export default PostFilter;