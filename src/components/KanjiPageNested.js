import React from 'react';
import TechInfo from "./TechInfo/TechInfo";
import KanjiInfo from "./KanjiInfo/KanjiInfo";
import Words from "./Words/Words";
import {useOutletContext} from "react-router-dom";

const KanjiPageNested = () => {
    const {kanjiData, kanji} = useOutletContext();
    return (
        <>
            <TechInfo
                kanji={kanjiData.kanji}
                grade={kanjiData.grade}
                heising={kanjiData.heising_en}
                jlpt={kanjiData.jlpt}
                strokeCount={kanjiData.stroke_count}
                unicode={kanjiData.unicode}
            />
            <KanjiInfo
                kun={kanjiData.kun_readings}
                on={kanjiData.on_readings}
                nanori={kanjiData.name_readings}
                meanings={kanjiData.meanings}
            />
            <Words kanji={kanji}/>
        </>
    );
};

export default KanjiPageNested;