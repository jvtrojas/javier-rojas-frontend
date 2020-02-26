/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';

const Language = (props) => {
    const text = props.text;
  return (
    <text className="lang-font" transform="matrix(1 0 0 1 0 389.6128)" font-family="'Grotesk'" font-size="518.442">{text}</text>
  //   <svg className="subtitle-responsive" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
  //       width="641.899px" height="420.334px" viewBox="0 0 641.899 420.334" enable-background="new 0 0 641.899 420.334">
           
	// </svg>
  );
}

export default Language;