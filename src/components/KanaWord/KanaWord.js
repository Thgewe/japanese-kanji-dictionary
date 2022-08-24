import React from 'react';
import cl from './kanaWord.module.scss';

const KanaWord = ({word}) => {
    return (
        <div className={cl.word}>
            {word}
        </div>
    );
};

export default KanaWord;