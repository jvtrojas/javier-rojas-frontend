import React from 'react';

// function MyApp({ Component, pageProps, auth }) {

//     const handleOnClickBlackSquareShuffler = () => {
//       let randomNumber = Math.floor(Math.random() * 12)
//       return( { order: `${randomNumber}` } )
//   }

const BlackSquareShuffler = ({children, handleOnClickBlackSquareShuffler}) => {
    return (
        <>
            <div onClick={handleOnClickBlackSquareShuffler} className="black-square"></div>
            {children}
        </>
    )
}

export default BlackSquareShuffler;
