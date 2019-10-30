import React from 'react';
import Header from '../shared/Header';

const BaseLayout = (props) => {
    return (
        <React.Fragment>
            <Header title={'tituloooo'} />
            {props.children}
        </React.Fragment>
    )
}

export default BaseLayout;
