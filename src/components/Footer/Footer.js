import React from 'react';
import cl from './footer.module.scss';
import TextLink from "../UI/TextLink/TextLink";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.container}>
                <div className={cl.powered}>
                    powered by <TextLink url={'https://kanjiapi.dev'}>kanjiapi.dev</TextLink> and <TextLink url={'https://reactjs.org'}>ReactJS</TextLink>
                </div>
                <div>my <TextLink url={'https://github.com/Thgewe'}>GitHub</TextLink></div>
            </div>
        </footer>
    );
};

export default Footer;