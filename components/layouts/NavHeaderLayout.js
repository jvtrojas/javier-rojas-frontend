import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NavHeaderLayout = ({children, setBlackSquareTrigger, handleMouseOverAnchor, isHovered, classToggle, setClassToggle}) => {

    const router = useRouter();

    //Black background when link selected
    let [ isSelected, setIsSelected ] = useState('');

    //Black-background selection
    let selectedClass = 'selected-class';

    let handleSelectedNavLink = id => {
        setIsSelected(id);
        setBlackSquareTrigger(0)
    }       

    function handleMouseOut() {
        setClassToggle('color-0');
    }

    return (
        <div className="container-fluid header">
            {/* HEADER */}
            <div className="row header-container wrap hide-scrollbar">
                <div>
                    <div className="header-anchor">
                        <Link href="/">
                            <a
                            className={`${isHovered=='home' ? classToggle : ''} ${isSelected=='home' || router.pathname=='/' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('home')}
                            onMouseEnter={() => handleMouseOverAnchor('home')} 
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
                            onMouseEnter={() => handleMouseOverAnchor('about')} 
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
                            className={`${isHovered=='projects' ? classToggle : ''} ${isSelected=='projects' || router.pathname=='/projects' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('projects')}
                            onMouseEnter={() => handleMouseOverAnchor('projects')} 
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
                            className={`${isHovered=='aural_architecture' ? classToggle : ''} ${isSelected=='aural_architecture' || router.pathname=='/autal-architecture' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('aural_architecture')}
                            onMouseEnter={() => handleMouseOverAnchor('aural_architecture')} 
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
                            onMouseEnter={() => handleMouseOverAnchor('photography')} 
                            onMouseEnter={() => handleMouseOverAnchor('photography')} 
                            onMouseLeave={handleMouseOut}
                            >
                                PHOTOGRAPHY!!
                            </a>       
                        </Link>                
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <Link href="/visuals">
                            <a 
                            href="#"
                            className={`${isHovered=='visuals' ? classToggle : ''} ${isSelected=='visuals' || router.pathname=='/visuals' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('visuals')}
                            onMouseEnter={() => handleMouseOverAnchor('visuals')} 
                            onMouseLeave={handleMouseOut}
                            >
                                VISUALS!!
                            </a>       
                        </Link>   
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <Link href="/music">
                            <a 
                            href="#"
                            className={`${isHovered=='music' ? classToggle : ''} ${isSelected=='music' || router.pathname=='/music' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('music')}
                            onMouseEnter={() => handleMouseOverAnchor('music')} 
                            onMouseLeave={handleMouseOut}
                            >
                                MUSIC!!
                            </a>       
                        </Link>   
                    </div>
                </div>
                <div>
                    <div className="header-anchor">
                        <Link href="/miscellaneous">
                            <a 
                            href="#"
                            className={`${isHovered=='miscellaneous' ? classToggle : ''} ${isSelected=='miscellaneous' || router.pathname=='/miscellaneous' ? selectedClass : ''}`}
                            onClick={() => handleSelectedNavLink('miscellaneous')}
                            onMouseEnter={() => handleMouseOverAnchor('miscellaneous')} 
                            onMouseLeave={handleMouseOut}
                            >
                                MISCELLANEOUS!!
                            </a>       
                        </Link>   
                    </div>
                </div>
            </div>

            {children}

        </div>

    )
}

export default NavHeaderLayout;