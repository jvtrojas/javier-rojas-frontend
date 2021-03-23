import React from 'react';

function isWorking(){
    return alert('im working')
}

const BlackSquareShuffler = ({children}) => {
    return (
        <>
            <div onClick={isWorking} className="black-square"></div>
            {children}
        </>
    )
}

export default BlackSquareShuffler;
