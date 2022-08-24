import React, {useState} from 'react';
import cl from './searchBlock.module.scss';
import SearchInput from "../UI/SearchInput/SearchInput";
import {useDispatch} from "react-redux";
import {changeReadingReducer} from "../../store/readingReducer";
import {changeKanjiAction} from "../../store/kanjiCharReducer";
import CustomButton from "../UI/CustomButton/CustomButton";
import {setKanjiInLocalStorage, setReadingInLocalStorage} from "../../utils/setLocalStorage";

const SearchBlock = ({label, reading = false}) => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch();

    const find = () => {
        if (value === '') return

        if (reading) {
            setReadingInLocalStorage({reading: value, type: 'searched'})
            dispatch(changeReadingReducer({type: 'searched', reading: value}))
        } else {
            setKanjiInLocalStorage(value)
            dispatch(changeKanjiAction(value))
        }
    }

    return (
        <div className={cl.search}>
            <SearchInput id={label} value={value} setValue={setValue}/>
            <div className={cl.button}>
                <CustomButton onClick={find}>find</CustomButton>
            </div>
        </div>
    );
};

export default SearchBlock;