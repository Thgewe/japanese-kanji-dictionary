import React from 'react';
import cl from './loader.module.scss';
import svg from '../../images/loader.svg';

const Loader = () => {
    return (
        <div className={cl.loader}>
            <img src={svg} alt=""/>
        </div>
    );
};

export default Loader;