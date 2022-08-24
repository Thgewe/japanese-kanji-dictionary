import React from 'react';
import cl from './meaning.module.scss';

const Meaning = ({meaning}) => {
    return (
        <div className={cl.meaning}>
            {meaning}
        </div>
    );
};

export default Meaning;