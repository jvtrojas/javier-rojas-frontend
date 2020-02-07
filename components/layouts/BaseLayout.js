import React from 'react';
import Header from '../shared/Header';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user } = props;
    return (
        <div>
            {/* <Header isAuthenticated={isAuthenticated} user={user}/> */}

                    {children}

        </div>
    )
}

export default BaseLayout;
