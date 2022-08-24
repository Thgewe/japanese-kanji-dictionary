import React from 'react';
import cl from './infoLine.module.scss';

const InfoLine = ({left, right}) => {
    return (
        <div className={cl.line}>
            <div className={cl.left}>{left}</div>
            <div className={cl.right}>{right}</div>
        </div>
    );
};

export default InfoLine;