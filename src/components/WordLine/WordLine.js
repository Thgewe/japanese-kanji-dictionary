import React from 'react';
import cl from './wordLine.module.scss';

const WordLine = ({left, right}) => {
    return (
        <div className={cl.line}>
            <div className={cl.left}>{left}</div>
            <div className={cl.right}>{right}</div>
        </div>
    );
};

export default WordLine;