import React from 'react';
import cl from './aboutPage.module.scss';
import TextLink from "../../components/UI/TextLink/TextLink";

const AboutPage = () => {
    return (
        <div className={cl.about}>
            <h1 className={cl.title}>What is this app about</h1>
            <p className={cl.text}>
                The application is a dictionary to Japanese kanji.<br/>
                The data is provided by <TextLink url={'https://kanjiapi.dev'} dark={true}>kanjiapi</TextLink>.<br/>
                Design taken from <TextLink url={'https://kai.kanjiapi.dev/#!/字'} dark={true}>kanjikai</TextLink>.
            </p>
        </div>
    );
};

export default AboutPage;