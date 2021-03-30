import React from 'react';

const BlackSquareShuffler = ({children, handleOnClickBlackSquareShuffler}) => {
    return (
        <>
            <div onClick={handleOnClickBlackSquareShuffler} className="black-square"></div>
            {children}
        </>
    )
}

export default BlackSquareShuffler;
