import React from 'react';
import cl from './kanjiWord.module.scss';
import KanaCharacter from "../KanaCharacter/KanaCharacter";
import KanjiCharacter from "../KanjiCharacter/KanjiCharacter";
import {useSelector} from "react-redux";

const KanjiWord = ({word}) => {

    const desiredKanji = useSelector(state => state.kanji)

    const kanjiOfWord = word?.split('').map((char, i) => {
        // checks if kana
        if (/[\u3040-\u30ff]/.test(char))
            return <KanaCharacter value={char} key={char + i}/>
        return <KanjiCharacter value={char} key={char + i} desired={char === desiredKanji}/>
    })

    return (
        <div className={cl.word}>
            {kanjiOfWord}
        </div>
    );
};

export default KanjiWord;