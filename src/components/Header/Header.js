import React from 'react';
import cl from './header.module.scss';
import Navigation from "../Navigation/Navigation";
import {routes} from "../../routes";

const Header = () => {

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