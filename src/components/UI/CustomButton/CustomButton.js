import React from 'react';
import cl from './customButton.module.scss';

const CustomButton = ({children, onClick}) => {
    return (
        <button className={cl.btn} onClick={onClick}>
            {children}
        </button>
    );
};

export default CustomButton;