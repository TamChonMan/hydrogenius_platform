import React from 'react';
import './Parameter.css';
import CapitalSlider from './CapitalSlider';

const Parameter = ({ onCapitalChange, onOmChange, capitalDefaultValue, omDefaultValue }) => {
  return (
    <div className="parameter">
      <CapitalSlider
        name="Capital"
        min={0}
        max={100}
        step={1}
        defaultValue={capitalDefaultValue}
        onChange={onCapitalChange}
      />

      {/* <Slider
        name="O&M"
        min={0}
        max={100}
        step={1}
        defaultValue={omDefaultValue}
        onChange={onOmChange}
      /> */}
    </div>
  );
};

export default Parameter;
