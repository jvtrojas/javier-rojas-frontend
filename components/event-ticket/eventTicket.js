/* eslint react/no-multi-comp: 0, react/prop-types: 0 width="375" height="419" */
import React, { useState } from 'react';

const EventTicket = (props) => {
    const text = props.text;
  return (
    <div className="ticket-box">
        <span className="text-content">
            <p className="ticket-info">@EL GRAN VIDRIO Art Gallery - Córdoba Argentina. </p>
            <p className="ticket-info">xx/xx/2019</p>
            <p className="ticket-info">002: 4.1 &gt; DNT - FASHION SHOW</p>
            <p className="ticket-info">200 PEOPLE</p>
            <p className="ticket-info">X4 12” SPEAKERS </p>
            <p className="ticket-info">1 SUBSOUND</p>
        </span>
      </div>
    // <svg className="shadow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
    //     viewBox="0 0 375 419" enable-background="new 0 0 375 419" >
    //         <rect  fill="#FFFFFF" />
    //             <g>
    //                 <g>
    //                     <g>
    //                         <g>
    //                             <text transform="matrix(1 0 0 1 21.5615 98.9824)"><p x="0" y="0" font-family="Grotesk" font-size="13.1998">200 PEOPLE</p><p x="0" y="15.84" font-family="'Grotesk'" font-size="13.1998">X4 12” SPEAKERS </p><p x="0" y="31.68" font-family="'Grotesk'" font-size="13.1998">1 SUBSOUND</p></text>
    //                         </g>
    //                     </g>
    //                 </g>
    //                 <g>
    //                     <text transform="matrix(1 0.0037 -0.0037 1 21.7012 47.082)"><p x="0" y="0" font-family="Grotesk" font-size="13.1998">002: 4.1 &gt; DNT - FASHION SHOW</p><p x="0" y="15.84" font-family="'Grotesk'" font-size="13.1998">@EL GRAN VIDRIO Art Gallery - Córdoba Argentina. </p><p x="0" y="34.262"  font-size="15.3525">xx/xx/2019</p></text>
    //                 </g>
    //             </g>
    // </svg>
  );
}

export default EventTicket;