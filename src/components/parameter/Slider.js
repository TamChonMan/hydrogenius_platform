import React, { useState, useEffect } from 'react';
import './Slider.css';
import SubSlider from './SubSlider';

const Slider = ({ name, min, max, step, defaultValue, onChange }) => {
  const initialSliderValue = (max + min) / 2;
  const [sliderValue, setSliderValue] = useState(initialSliderValue);
  const [calculatedValue, setCalculatedValue] = useState(defaultValue);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const [cableValue, setcableValue] = useState(80); // Initial value for cable
  const [Pipeline, setpipelineValue] = useState(80); // Initial value for pipeline

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

  const handleCableChange = (value) => {
    setcableValue(value);
    // If you want to update the main slider based on the sub slider, add the logic here
  };
  const handlepipelineChange = (value) => {
    setpipelineValue(value);
    // If you want to update the main slider based on the sub slider, add the logic here
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
              name="Cable"
              min={0}
              max={100}
              step={1}
              defaultValue={80}
              onChange={handleCableChange}
            />
            <SubSlider
              name='Pipeline'
              min={0}
              max={100}
              step={1}
              defaultValue={40}
              onChange={handlepipelineChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
