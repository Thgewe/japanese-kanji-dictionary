import React, {useEffect, useState} from 'react';
import cl from './readingPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";
import KanjiService from "../../API/KanjiService";
import KanjiCharacter from "../../components/KanjiCharacter/KanjiCharacter";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import Error from "../../components/UI/Error/Error";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {changeReadingAction} from "../../store/readingReducer";

const ReadingPage = () => {


    const [mainKanjiList, setMainKanjiList] = useState([]);
    const [nameKanjiList, setNameKanjiList] = useState([]);
    const reading = useSelector(state => state.reading)
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const [fetching, loading, error] = useFetch(async () => {
        const res = await KanjiService.getKanjiByReading(reading.reading)
        setMainKanjiList(res.main_kanji)
        setNameKanjiList(res.name_kanji)
    })

    //redirect if uncompleted path
    useEffect(() => {
        if (params.readingId === undefined) {
            navigate(reading.reading)
        }
    })

    // checks if the new id changed manually in link or on click
    useEffect(() => {
        if (params.readingId !== reading.reading && params.readingId !== undefined) {
            dispatch(changeReadingAction({reading: params.readingId, type: 'kun'}))
        } else if (params.readingId !== undefined) {
            fetching()
        }
    }, [params.readingId])

    useEffect(() => {
        if (params.readingId === reading.reading) {
            fetching()
        }
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
                    <Outlet context={{mainKanjiJSX, reading, nameKanjiJSX}}/>
                </>
            }
        </div>
    );
};

export default ReadingPage;