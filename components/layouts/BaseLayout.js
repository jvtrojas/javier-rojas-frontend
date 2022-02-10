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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"         />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;700&display=swap" rel="stylesheet"/>
                <link rel="preload" href="https://www.allfont.es/cache/fonts/bpdotscondensedsquare_94cd44a67704432b013aa6c9ed99c81e.ttf" as="font" crossOrigin="anonymous" />
                <link rel="preload" href="https://ggayane.github.io/css-experiments/Inconsolata-VF.ttf" as="font" crossOrigin="anonymous" />
                <link rel="preload" href="https://res.cloudinary.com/hzisufglx/raw/upload/v1626072237/B_Pdots_Condensed_Diamond_2f853c24bf.ttf" as="font" crossOrigin="anonymous" />
                <link rel="preload" href="https://res.cloudinary.com/hzisufglx/raw/upload/v1626072589/B_Pdots_Condensed_619d51fb3c.ttf" as="font" crossOrigin="anonymous"/>
            </Head>
            <div>
                {children}
            </div>
        </React.Fragment>
    )
}

export default BaseLayout;
