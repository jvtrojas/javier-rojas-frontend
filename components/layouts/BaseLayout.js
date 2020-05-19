import React from 'react';
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user } = props;
    return (
        <React.Fragment>
            <Head>
                <title>AuralArk</title>
                <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
            </Head>
            <div>
                {children}
            </div>
        </React.Fragment>
    )
}

export default BaseLayout;
