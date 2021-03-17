import React from 'react';

function NavHeader() {
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
                        <a href="#">ABOUT!!</a>          
                    </div>
                </div>
                <div>
                    <div className="header-anchor aural-logo-header">
                        <a href="#">PROJECTS!!</a>                       
                    </div>
                </div>
                <div>
                    <div className="header-anchor aural-logo-header">
                        <a href="#">AURAL_ARCHITECTURE!!</a>          
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