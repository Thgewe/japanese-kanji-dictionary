import React from 'react';
import cl from './kanjiCharacter.module.scss';
import {useDispatch} from "react-redux";
import {changeKanjiAction} from "../../store/kanjiCharReducer";
import {useNavigate} from "react-router-dom";
import {setKanjiInLocalStorage} from "../../utils/setLocalStorage";

const KanjiCharacter = ({value, desired = false, main = false}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mainClass = main
        ? cl.kanji + ' ' + cl.main
        : cl.kanji
    const kanjiClass = desired
        ? mainClass + ' ' + cl.desired
        : mainClass

    const setNewKanji = () => {
        if (desired) return

        setKanjiInLocalStorage(value)
        dispatch(changeKanjiAction(value))
        navigate('/kanji')
    }

    return (
        <div className={kanjiClass} onClick={setNewKanji}>
            {value}
        </div>
    );
};

export default KanjiCharacter;