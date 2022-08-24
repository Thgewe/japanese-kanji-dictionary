import React from 'react';
import cl from './searchInput.module.scss';

const SearchInput = ({setValue, id, value}) => {
    return (
        <div className={cl.container}>
            <label htmlFor={id} className={cl.label}>{id}</label>
            <input type="text" id={id} onChange={(e) => setValue(e.target.value)} value={value} className={cl.input}/>
        </div>
    );
};

export default SearchInput;