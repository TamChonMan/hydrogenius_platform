import React, { useState, useEffect } from 'react';
import './subSlider.css';

const SubSlider = ({ name, min, max, step, defaultValue, value, onChange, unit }) => {
  const [sliderValue, setSliderValue] = useState(value);
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
    const percentage = ((value / defaultValue - 1) * 100).toFixed(2);
    const newSliderValue = min + ((parseFloat(percentage) + 100) / 200) * (max - min);
    setSliderValue(newSliderValue);
  }, [value, defaultValue, min, max]);

  const handleSliderChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setSliderValue(newValue);
    const percentage = ((newValue - min) / (max - min) * 200 - 100).toFixed(1);
    const newCalculatedValue = (defaultValue * (1 + percentage / 100)).toFixed(1);
    setInputValue(newCalculatedValue.toString());
    onChange(parseFloat(newCalculatedValue));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputValidation = () => {
    const numericValue = parseFloat(inputValue);
    if (isNaN(numericValue)) {
      alert('輸入不正確，請輸入數字');
      setInputValue(defaultValue.toString());
      return;
    }
    onChange(numericValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleInputValidation();
    }
  };

  const handleSliderDoubleClick = () => {
    setSliderValue(defaultValue);
    setInputValue(defaultValue.toString());
    onChange(defaultValue);
  };

  const percentage = ((sliderValue - min) / (max - min) * 200 - 100).toFixed(1);

  return (
    <div className="sub-slider-content">
      <div className="sub-slider-name">{name}</div>
      <div className="sub-parameter-percentage">{percentage}%</div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        className="sub-slider"
        onChange={handleSliderChange}
        onDoubleClick={handleSliderDoubleClick}
      />
      <input
        type="text"
        className="sub-slider-input"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputValidation}
        onKeyDown={handleKeyDown}
      />
      <div className="sub-slider-unit">{unit}</div>
    </div>
  );
};

export default SubSlider;
