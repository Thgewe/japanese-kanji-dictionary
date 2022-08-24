import React from 'react';
import cl from './header.module.scss';
import Navigation from "../Navigation/Navigation";
import {KANJI_ROUTE, ABOUT_ROUTE, READING_ROUTE} from "../../utils/constants";

const Header = () => {

    const routes = [
        {
            to: ABOUT_ROUTE,
            name: 'about',
        },
        {
            to: KANJI_ROUTE,
            name: 'kanji',
        },
        {
            to: READING_ROUTE,
            name: 'reading',
        },
    ]

    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.title}>漢字</div>
                <Navigation routes={routes}/>
            </div>
        </header>
    );
};

export default Header;