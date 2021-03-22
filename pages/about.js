import React from 'react';

class About extends React.Component {
    render(){

    // function shuffleOrder() {
    // for (var i=0;i<4;i++){
    //     var randomNumber = Math.floor(Math.random() * 4);
    //     elements[i].style.order = randomNumber;
    //     }
    // }

// shuffleOrder()

    return (
        <div className="no-padding">
            {/* Row lang EN */}
            <div className="row-about wrap hide-scrollbar webkit-scrollbar">
                <div className="selected-class black-block title_projects">
                EN
                </div>
                <div>
                    <img className="imgrow" src="static/images/9_16/4A9C9416-477D-4496-96B4-088EDC1D74AB.jpg" alt="ATERNATIVO"/>
                </div>
            </div>
        </div>
    )
}
}

export default About;