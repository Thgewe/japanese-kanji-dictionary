import React from 'react';
import cl from './navigation.module.scss';
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const Navigation = ({routes}) => {

    const kanji = useSelector(state => state.kanji)
    const reading = useSelector(state => state.reading)
    const location = useLocation()

    // redirect
    const getPath = (path) => {
        if (path === '/kanji') {
            return path + '/' + kanji
        } else if (path === '/reading') {
            return path + '/' + reading.reading
        } else {
            return path
        }
    }

    const isActiveCheck = (currentPath, path) => {
        return currentPath.includes(path)
    }

    return (
        <nav className={cl.navigation}>
            {routes.map(route =>
                <NavLink
                    to={getPath(route.path)}
                    className={isActiveCheck(location.pathname, route.path) ? cl.route + ' ' + cl.active : cl.route}
                    key={route.path}
                >
                    {route.name}
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;