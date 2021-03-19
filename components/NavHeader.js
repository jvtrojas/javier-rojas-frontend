import React, { useState } from 'react';

function NavHeader() {

    let [ isHovered, setIsHovered ] = useState('');

    //Clase por default
    let [ classToggle, setClassToggle ] = useState('color-0');
    
    //Array con clases
    let headerAnchorClassArray = ['color-1', 'color-2'];
    

    let handleMouseOver = id => {
        setIsHovered(id)
        let number = Math.floor(Math.random() * headerAnchorClassArray.length)
        setClassToggle(headerAnchorClassArray[number]);
    }

    function handleMouseOut() {
        setClassToggle('color-0');
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
                        className={isHovered=='about' ? classToggle : ''}
                        onMouseEnter={() => handleMouseOver('about')} 
                        onMouseLeave={handleMouseOut}
                        >
                        ABOUT!!</a>          
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <a 
                        href="#"
                        className={isHovered=='projects' ? classToggle : ''}
                        onMouseEnter={() => handleMouseOver('projects')} 
                        onMouseLeave={handleMouseOut}
                        >
                        PROJECTS!!</a>                       
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <a 
                        href="#"
                        className={isHovered=='aural_architecture' ? classToggle : ''}
                        onMouseEnter={() => handleMouseOver('aural_architecture')} 
                        onMouseLeave={handleMouseOut}
                        >
                        AURAL_ARCHITECTURE!!</a>          
                    </div>
                </div>
                    <div>
                    <div className="header-anchor">
                        <a 
                        href="#"
                        className={isHovered=='photography' ? classToggle : ''}
                        onMouseEnter={() => handleMouseOver('photography')} 
                        onMouseLeave={handleMouseOut}
                        >
                        PHOTOGRAPHY!!</a>                       
                    </div>
                    
                    </div>
                    <div className="header-anchor">
                        <a 
                        href="#"
                        className={isHovered=='music' ? classToggle : ''}
                        onMouseEnter={() => handleMouseOver('music')} 
                        onMouseLeave={handleMouseOut}
                        >
                        MUSIC!!</a>          
                    </div>
            </div>
        </div>

    )
}

export default NavHeader;