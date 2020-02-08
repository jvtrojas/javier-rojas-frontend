/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const Example = (props) => {
  const word = props.word;
  const pop = props.pop;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">{word}</span>.</p>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        {pop}
      </Tooltip>
    </div>
  );
}

export default Example;