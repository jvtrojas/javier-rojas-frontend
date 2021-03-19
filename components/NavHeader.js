import React, { useState } from 'react';

function NavHeader() {

    let [ classDefault, setClassDefault ] = useState('color-0');
    let headerAnchorClassArray = ['color-1', 'color-2'];
    

    function handleMouseOver() {
        let number = Math.floor(Math.random() * headerAnchorClassArray.length)
        setClassDefault(headerAnchorClassArray[number]);
    }

    function handleMouseOut() {
        setClassDefault('color-0');
        }

    return (
        <div className="container-fluid">
            {/* HEADER */}
            <div className="row header-container wrap hide-scrollbar">
                <div>
                    <div className="header-anchor">
                        <a class="black-background" href="#">HOME!!</a>                       
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <a 
                        href="#"
                        className={classDefault}
                        onMouseEnter={handleMouseOver} 
                        onMouseLeave={handleMouseOut}
                        >
                        ABOUT!!</a>          
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <a 
                        href="#"
                        className={classDefault}
                        onMouseEnter={handleMouseOver} 
                        onMouseLeave={handleMouseOut}
                        >
                        PROJECTS!!</a>                       
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <a 
                        href="#"
                        className={classDefault}
                        onMouseEnter={handleMouseOver} 
                        onMouseLeave={handleMouseOut}
                        >
                        AURAL_ARCHITECTURE!!</a>          
                    </div>
                </div>
                    <div>
                    <div className="header-anchor">
                        <a 
                        href="#"
                        className={classDefault}
                        onMouseEnter={handleMouseOver} 
                        onMouseLeave={handleMouseOut}
                        >
                        PHOTOGRAPHY!!</a>                       
                    </div>
                    
                    </div>
                    <div className="header-anchor">
                        <a 
                        href="#"
                        className={classDefault}
                        onMouseEnter={handleMouseOver} 
                        onMouseLeave={handleMouseOut}
                        >
                        MUSIC!!</a>          
                    </div>
            </div>
        </div>

    )
}

export default NavHeader;