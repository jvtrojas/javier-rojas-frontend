import React from 'react';
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user } = props;
    return (
        <React.Fragment>
            <Head>
                <title>Javier-Rojas.xyz</title>
                <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;700&display=swap" rel="stylesheet"/>
                <link href="https://allfont.es/allfont.css?fonts=bpdotscondensedsquare" rel="stylesheet" type="text/css" />
                <link rel="preload" href="https://ggayane.github.io/css-experiments/Inconsolata-VF.ttf" as="font" crossorigin="anonymous" />
                <link href="https://allfont.es/allfont.css?fonts=bpdotscondenseddiamond" rel="stylesheet" type="text/css" />
                <link href="https://allfont.es/allfont.css?fonts=bpdotscondensed" rel="stylesheet" type="text/css" />
            </Head>
            <div>
                {children}
            </div>
        </React.Fragment>
    )
}

export default BaseLayout;
