import React, { useState, useEffect } from 'react';
import './CapitalSlider.css';
import SubSlider from './subSlider/SubSlider';
import defaultValues from './defaultValues.js';

const CapitalSlider = ({ name, min, max, step, onChange }) => {
  const initialSliderValue = (max + min) / 2;

  // Import default values
  const turbinedefaultValue = defaultValues.CAPEX.nonInstallation.turbine;
  const turbinePlatformsDefaultValue = defaultValues.CAPEX.nonInstallation.turbinePlatforms;

  const [sliderValue, setSliderValue] = useState(initialSliderValue);
  const [TurbineValue, setTurbineValue] = useState(turbinedefaultValue);
  const [TurbinePlatformsValue, setTurbinePlatformsValue] = useState(turbinePlatformsDefaultValue);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const calculatedValue = (parseFloat(TurbineValue) + parseFloat(TurbinePlatformsValue)).toFixed(2);

  useEffect(() => {
    onChange && onChange(parseFloat(calculatedValue));
  }, [calculatedValue, onChange]);

  const handleSliderChange = (event) => {
    const value = parseFloat(event.target.value);
    setSliderValue(value);

    const percentage = ((value - min) / (max - min) * 200 - 100).toFixed(2);
    setTurbineValue((turbinedefaultValue * (1 + percentage / 100)).toFixed(2));
    setTurbinePlatformsValue((turbinePlatformsDefaultValue * (1 + percentage / 100)).toFixed(2));
  };

  const handleTurbineChange = (value) => {
    setTurbineValue(parseFloat(value));
  };

  const handleTurbinePlatformsChange = (value) => {
    setTurbinePlatformsValue(parseFloat(value));
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const percentage = ((sliderValue - min) / (max - min) * 200 - 100).toFixed(2);

  return (
    <div className={`slider-container ${isDropdownVisible ? 'dropdown-active' : ''}`}>
      <div className={`slider-content ${isDropdownVisible ? 'black-text' : 'white-text'}`}>
        <div className="slider-name">{name}</div>
        <div className="parameter_percentage">{percentage}%</div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          className="slider"
          onChange={handleSliderChange}
        />
        <div className="slider-value">{calculatedValue}</div>
        <button className="dropdown-button" onClick={toggleDropdown}>
          {isDropdownVisible ? '▲' : '▼'}
        </button>
      </div>
      {isDropdownVisible && (
        <div className="dropdown-wrapper">
          <div className={`dropdown-container ${isDropdownVisible ? 'black-text' : 'white-text'}`}>
            <SubSlider
              name="Turbine"
              min={0}
              max={100}
              step={1}
              defaultValue={turbinedefaultValue}
              value={TurbineValue}
              onChange={handleTurbineChange}
              unit="USD"
            />
            <SubSlider
              name="Turbine Platforms"
              min={0}
              max={100}
              step={1}
              defaultValue={turbinePlatformsDefaultValue}
              value={TurbinePlatformsValue}
              onChange={handleTurbinePlatformsChange}
              unit="USD"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CapitalSlider;
