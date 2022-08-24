import React from 'react';
import cl from './kanaCharacter.module.scss';

const KanaCharacter = ({value}) => {
    return (
        <div className={cl.kana}>
            {value}
        </div>
    );
};

export default KanaCharacter;