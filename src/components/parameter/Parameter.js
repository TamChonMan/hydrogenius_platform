import React from 'react';
import './Parameter.css';
import CapitalSlider from './CapitalSlider';
import InstallationSlider from './InstallationSlider';
import OMSlider from './OMSlider';
import DecompSlider from './DecompSlider';

const Parameter = ({ onCapitalChange, onInstallationChange,onOMChange,ondecompChange }) => {
  return (
    <div className="parameter">
      <CapitalSlider
        name="Capital"
        min={0}
        max={100}
        step={1}
        onChange={onCapitalChange}
      />

      <InstallationSlider
        name="Installation"
        min={0}
        max={100}
        step={1}
        onChange={onInstallationChange}
      />    

      <OMSlider
        name="O&M"
        min={0}
        max={100}
        step={1}
        onChange={onOMChange}
      />    

      <DecompSlider
        name="Decomp"
        min={0}
        max={100}
        step={1}
        onChange={ondecompChange}
      />    
    </div>
  );
};

export default Parameter;
