import React, {useEffect, useState} from 'react';
import cl from './kanjiPage.module.scss';
import {useFetch} from "../../hooks/useFetch";
import KanjiService from "../../API/KanjiService";
import Loader from "../../components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import Error from "../../components/UI/Error/Error";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {changeKanjiAction} from "../../store/kanjiCharReducer";

const KanjiPage = () => {

    const kanji = useSelector(state => state.kanji)
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [kanjiData, setKanjiData] = useState({});
    const [fetching, loading, error] = useFetch(async () => {
        const res = await KanjiService.getKanji(kanji);
        setKanjiData(res);
    })

    // redirect if uncompleted path
    useEffect(() => {
        if (params.kanjiId === undefined) {
            navigate(kanji)
        }
    })

    // checks if the new id changed manually in link or on click
    useEffect(() => {
        if (params.kanjiId !== kanji && params.kanjiId !== undefined) {
            dispatch(changeKanjiAction(params.kanjiId))
        } else if (params.kanjiId !== undefined) {
            fetching()
        }
    }, [params.kanjiId])

    useEffect(() => {
        if (params.kanjiId === kanji) {
            fetching()
        }
    }, [kanji])

    if (loading)
        return <Loader />

    return (
        <div className={cl.page}>
            <SearchBlock label={'Search kanji'}/>
            {error
                ? <Error text={error}/>
                : <Outlet context={{kanjiData, kanji}}/>
            }
        </div>
    );
};

export default KanjiPage;