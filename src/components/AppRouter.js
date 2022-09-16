import React from 'react';
import {routes} from "../routes";
import {Navigate, Route, Routes} from "react-router-dom";
import {ABOUT_ROUTE} from "../utils/constants";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, component, nested}) =>
                <Route path={path} element={component} key={path}>
                    nested
                        ? <Route path={nested.path} element={nested.component}/>
                        : null
                </Route>
            )}
            <Route path={'*'} element={<Navigate to={ABOUT_ROUTE} replace={true}/>}/>
        </Routes>
    );
};

export default AppRouter;