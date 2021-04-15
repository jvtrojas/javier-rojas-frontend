import React from 'react';

const BlackSquareShuffler = ({children, handleBlackSquareShuffler}) => {
    return (
        <>
            <div onClick={handleBlackSquareShuffler} className="black-square"></div>
            {children}
        </>
    )
}

export default BlackSquareShuffler;
