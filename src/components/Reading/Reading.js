import React from 'react';
import cl from './reading.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {changeReadingReducer} from "../../store/readingReducer";
import {useLocation, useNavigate} from "react-router-dom";
import {setReadingInLocalStorage} from "../../utils/setLocalStorage";

const Reading = ({type, text, big = false}) => {

    let textClass = big ? cl.big : '';

    const dispatch = useDispatch()
    const navigation = useNavigate()
    const location = useLocation()
    const current = useSelector(state => state.reading)

    switch (type) {
        case 'kun':
            textClass = cl.kun + ' ' + textClass
            break
        case 'on':
            textClass = cl.on + ' ' + textClass
            break
        case 'nanori':
            textClass = cl.nanori + ' ' + textClass
            break
        case 'meanings':
            textClass = cl.meaning + ' ' + textClass
            break
        case 'searched':
            textClass = cl.searched + ' ' + textClass
            break
        default:
            textClass = cl.none
    }

    const setReading = () => {
        // Checks if you have clicked on "meanings" or if the clicked "reading" is already selected, and you are on the right page
        if (type === 'meanings' || (text === current.reading && location.pathname === '/reading')) return

        // If you are on the wrong page
        if (text === current.reading) {
            navigation('/reading')
            return
        }

        const newReading = {
            reading: text,
            type: type,
        }
        setReadingInLocalStorage(newReading)
        dispatch(changeReadingReducer(newReading))
        navigation('/reading')
    }

    return (
        <div className={cl.block}>
            <div className={cl.reading + ' ' + textClass} onClick={setReading}>{text}</div>
        </div>
    );
};

export default Reading;