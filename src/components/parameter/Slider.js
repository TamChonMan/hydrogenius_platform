import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ({ name, min, max, step, defaultValue, onChange }) => {
  const initialSliderValue = (max + min) / 2;
  // 主slider
  const [sliderValue, setSliderValue] = useState(initialSliderValue);
  const [calculatedValue, setCalculatedValue] = useState(defaultValue);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const percentage = ((sliderValue - min) / (max - min) * 200 - 100).toFixed(2);
    const newCalculatedValue = (defaultValue * (1 + percentage / 100)).toFixed(2);
    setCalculatedValue(newCalculatedValue);
    onChange && onChange(newCalculatedValue);
  }, [sliderValue, min, max, defaultValue, onChange]);

  const handleSliderChange = (event) => {  
    const value = parseFloat(event.target.value);
    setSliderValue(value);

    const percentage = ((value - min) / (max - min) * 200 - 100).toFixed(2);
    const newCalculatedValue = (defaultValue * (1 + percentage / 100)).toFixed(2);
    setCalculatedValue(newCalculatedValue);
    onChange && onChange(newCalculatedValue);
  };

  const percentage = ((sliderValue - min) / (max - min) * 200 - 100).toFixed(2);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // 子slider change
  //cable
  const cable_defaultValue = 800;
  const initialcable_defaultValue = 50;
  const [cablecost, setScablecost] = useState(initialcable_defaultValue);
  const [calculatedcablecost, setcalculatedcablecost] = useState(cable_defaultValue);



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
            <div className="sub-slider-content">
              <div className="slider-name">{name} Sub</div>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
