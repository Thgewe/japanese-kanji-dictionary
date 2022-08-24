import React, {useEffect, useState} from 'react';
import cl from './readingPage.module.scss';
import {useSelector} from "react-redux";
import Reading from "../../components/Reading/Reading";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";
import KanjiService from "../../API/KanjiService";
import KanjiCharacter from "../../components/KanjiCharacter/KanjiCharacter";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import Error from "../../components/UI/Error/Error";

const ReadingPage = () => {


    const [mainKanjiList, setMainKanjiList] = useState([]);
    const [nameKanjiList, setNameKanjiList] = useState([]);
    const reading = useSelector(state => state.reading)

    const [fetching, loading, error] = useFetch(async () => {
        const res = await KanjiService.getKanjiByReading(reading.reading)
        setMainKanjiList(res.main_kanji)
        setNameKanjiList(res.name_kanji)
    })

    useEffect(() => {
        fetching()
    }, [])

    useEffect(() => {
        fetching()
    }, [reading])

    const nameKanjiJSX = nameKanjiList?.map((kanji, i) => <KanjiCharacter value={kanji} key={kanji + i}/>)
    const mainKanjiJSX = mainKanjiList?.map((kanji, i) => <KanjiCharacter value={kanji} key={kanji + i}/>)

    if (loading)
        return <Loader />

    return (
        <div className={cl.page}>
            <SearchBlock label={'Search by reading'} reading={true}/>
            {error !== ''
                ? <Error text={error}/>
                : <>
                    <h2 className={cl.title}>Reading</h2>
                    <div className={cl.reading}>
                        <Reading text={reading.reading} type={reading.type} big={true}/>
                    </div>
                    <h2 className={cl.title}>Main kanji</h2>
                    <div className={cl.list}>
                        {mainKanjiJSX}
                    </div>
                    <h2 className={cl.title}>Name kanji</h2>
                    <div className={cl.list}>
                        {nameKanjiJSX}
                    </div>
                </>
            }
        </div>
    );
};

export default ReadingPage;