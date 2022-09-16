import React from 'react';
import cl from "../pages/ReadingPage/readingPage.module.scss";
import Reading from "./Reading/Reading";
import {useOutletContext} from "react-router-dom";

const ReadingPageNested = () => {

    const {reading, mainKanjiJSX, nameKanjiJSX} = useOutletContext();

    return (
        <>
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
    );
};

export default ReadingPageNested;