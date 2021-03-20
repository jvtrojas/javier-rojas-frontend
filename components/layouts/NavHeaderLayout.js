import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router'

const NavHeaderLayout = ({children}) => {

    //Metodo muy cabeza de forzar Black background si el header hace reload
    const router = useRouter();

    //Hover ID para cada link
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

    //Black background when link selected
    let [ isSelected, setIsSelected ] = useState('');
    let selectedClass = 'selected-class';

    let handleSelectedNavLink = id => {
        setIsSelected(id);
    }


    return (
        <div className="container-fluid">
            {/* HEADER */}
            <div className="row header-container wrap hide-scrollbar">
                <div>
                    <div className="header-anchor">
                        <Link href="/">
                            <a
                            className={`${isHovered=='home' ? classToggle : ''} ${isSelected=='home' || router.pathname=='/' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('home')}
                            onMouseEnter={() => handleMouseOver('home')} 
                            onMouseLeave={handleMouseOut}
                            >
                                HOME!!
                            </a>    
                        </Link>                   
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <Link href="/about">
                            <a
                            className={`${isHovered=='about' ? classToggle : ''} ${isSelected=='about' || router.pathname=='/about' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('about')}
                            onMouseEnter={() => handleMouseOver('about')} 
                            onMouseLeave={handleMouseOut}
                            >
                                ABOUT!!
                            </a>    
                        </Link>    
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <Link href="/projects">
                            <a 
                            href="#"
                            className={`${isHovered=='projects' ? classToggle : ''} ${isSelected=='projects' || router.pathname=='/projects'  ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('projects')}
                            onMouseEnter={() => handleMouseOver('projects')} 
                            onMouseLeave={handleMouseOut}
                            >
                                PROJECTS!!
                            </a>    
                        </Link>                   
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <Link href="/aural-architecture">
                            <a 
                            href="#"
                            className={`${isHovered=='aural_architecture' ? classToggle : ''} ${isSelected=='aural_architecture' || router.pathname=='/aural-architecture' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('aural_architecture')}
                            onMouseEnter={() => handleMouseOver('aural_architecture')} 
                            onMouseLeave={handleMouseOut}
                            >
                                AURAL_ARCHITECTURE!!
                            </a>          
                        </Link>
                    </div>
                </div>
                    <div>
                    <div className="header-anchor">
                        <Link href="/photography">
                            <a 
                            href="#"
                            className={`${isHovered=='photography' ? classToggle : ''} ${isSelected=='photography' || router.pathname=='/photography' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('photography')}
                            onMouseEnter={() => handleMouseOver('photography')} 
                            onMouseEnter={() => handleMouseOver('photography')} 
                            onMouseLeave={handleMouseOut}
                            >
                                PHOTOGRAPHY!!
                            </a>       
                        </Link>                
                    </div>
                    
                    </div>
                    <div className="header-anchor">
                        <Link href="/music">
                            <a 
                            href="#"
                            className={`${isHovered=='music' ? classToggle : ''} ${isSelected=='music' || router.pathname=='/music' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('music')}
                            onMouseEnter={() => handleMouseOver('music')} 
                            onMouseLeave={handleMouseOut}
                            >
                                MUSIC!!
                            </a>       
                        </Link>   
                    </div>
            </div>

            {children}
        </div>

    )
}

export default NavHeaderLayout;