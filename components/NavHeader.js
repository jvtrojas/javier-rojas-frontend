import React from 'react';

function NavHeader() {

    let colorsArray = ['#41FEFF','#C302FE','1034ef','#44FFC4','#FFF500','#F90F01'];
    
    function randomNumber() {
        let number = Math.floor(Math.random() * colorsArray.length)
        return number
        }

    const handleHoverColorChange = mouseEnter => {
        let headerLink = mouseEnter.target;
        headerLink.style.backgroundColor = colorsArray[randomNumber()]
        headerLink.style.color = colorsArray[randomNumber()]
    }

    const handleDefaultColor = mouseLeave => {
        let headerLink = mouseLeave.target;
        headerLink.style.backgroundColor = 'white';
        headerLink.style.color = 'black';
        }


    return (
        <div className="container-fluid">
            {/* HEADER */}
            <div className="row header-container wrap hide-scrollbar">
                <div>
                    <div className="header-anchor black-background">
                        <a href="#">HOME!!</a>                       
                    </div>
                </div>
                <div>
                    <div className="header-anchor aural-logo-header">
                        <a 
                        href="#"
                        onMouseEnter={mouseEnter => handleHoverColorChange(mouseEnter)} 
                        onMouseLeave={mouseLeave => handleDefaultColor(mouseLeave)}
                        >
                        ABOUT!!</a>          
                    </div>
                </div>
                <div>
                    <div className="header-anchor aural-logo-header">
                        <a 
                        href="#"
                        onMouseEnter={mouseEnter => handleHoverColorChange(mouseEnter)} 
                        onMouseLeave={mouseLeave => handleDefaultColor(mouseLeave)}
                        >
                        PROJECTS!!</a>                       
                    </div>
                </div>
                <div>
                    <div className="header-anchor aural-logo-header">
                        <a 
                        href="#"
                        onMouseEnter={mouseEnter => handleHoverColorChange(mouseEnter)} 
                        onMouseLeave={mouseLeave => handleDefaultColor(mouseLeave)}
                        >
                        AURAL_ARCHITECTURE!!</a>          
                    </div>
                </div>
                    <div>
                    <div className="header-anchor aural-logo-header">
                        <a href="#">PHOTOGRAPHY!!</a>                       
                    </div>
                    
                    </div>
                <div className="header-anchor aural-logo-header">
                        <a href="#">MUSIC!!</a>          
                    </div>
            </div>
        </div>

    )
}

export default NavHeader;