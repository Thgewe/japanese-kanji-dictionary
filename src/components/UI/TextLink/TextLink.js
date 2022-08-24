import React from 'react';
import cl from './textLink.module.scss';

const TextLink = ({children, url, dark = false}) => {
    return (
        <a className={dark ? cl.link + ' ' + cl.dark : cl.link} href={url}>
            {children}
        </a>
    );
};

export default TextLink;