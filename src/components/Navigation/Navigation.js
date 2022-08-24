import React from 'react';
import cl from './navigation.module.scss';
import {NavLink} from "react-router-dom";

const Navigation = ({routes}) => {
    return (
        <nav className={cl.navigation}>
            {routes.map(route =>
                <NavLink
                    to={route.to}
                    className={({isActive}) =>
                        isActive ? cl.route + ' ' + cl.active : cl.route}
                    key={route.to}
                >
                    {route.name}
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;