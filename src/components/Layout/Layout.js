import React from 'react';
import cl from './layout.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <div className={cl.container}>
            <Header />
            <div className={cl.wrapper}>
                <main className={cl.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;