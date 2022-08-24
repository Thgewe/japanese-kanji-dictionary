import React from 'react';
import {routes} from "../routes";
import {Navigate, Route, Routes} from "react-router-dom";
import {ABOUT_ROUTE} from "../utils/constants";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, component}) =>
                <Route path={path} element={component} exact={true} key={path}/>
            )}
            <Route path={'*'} element={<Navigate to={ABOUT_ROUTE} replace={true}/>}/>
        </Routes>
    );
};

export default AppRouter;