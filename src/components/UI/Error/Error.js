import React from 'react';
import cl from './error.module.scss';

const Error = ({text}) => {
    return (
        <div className={cl.error}>
            {text}
        </div>
    );
};

export default Error;