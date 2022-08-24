import React, {useEffect, useState} from 'react';
import cl from './kanjiPage.module.scss';
import {useFetch} from "../../hooks/useFetch";
import KanjiService from "../../API/KanjiService";
import Loader from "../../components/Loader/Loader";
import TechInfo from "../../components/TechInfo/TechInfo";
import KanjiInfo from "../../components/KanjiInfo/KanjiInfo";
import {useSelector} from "react-redux";
import Words from "../../components/Words/Words";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import Error from "../../components/UI/Error/Error";

const KanjiPage = () => {

    const kanji = useSelector(state => state.kanji)

    const [kanjiData, setKanjiData] = useState({});
    const [fetching, loading, error] = useFetch(async () => {
        const res = await KanjiService.getKanji(kanji);
        setKanjiData(res);
    })

    useEffect(() => {
        fetching()
    }, [])

    useEffect(() => {
        fetching()
    }, [kanji])

    if (loading)
        return <Loader />

    return (
        <div className={cl.page}>
            <SearchBlock label={'Search kanji'}/>
            {error
                ? <Error text={error}/>
                : <>
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
            }

        </div>
    );
};

export default KanjiPage;