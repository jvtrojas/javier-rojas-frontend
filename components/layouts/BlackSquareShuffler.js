import React from 'react';

const BlackSquareShuffler = ({children, handleBlackSquareShuffler, anchorIsHovered, classToggle}) => {
    return (
        <>
            <div onClick={handleBlackSquareShuffler} className={`${anchorIsHovered ? classToggle : null} black-square`}></div>
            {children}
        </>
    )
}

export default BlackSquareShuffler;
