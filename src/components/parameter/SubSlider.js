import React, { useState, useEffect } from 'react';
import './subSlider.css';

const SubSlider = ({ name, min, max, step, defaultValue, onChange ,unit}) => {
  const initialSliderValue = (max + min) / 2;
  const [sliderValue, setSliderValue] = useState(initialSliderValue);
  const [inputValue, setInputValue] = useState(defaultValue.toString());

  useEffect(() => {
    const percentage = ((sliderValue - min) / (max - min) * 200 - 100).toFixed(2);
    const newCalculatedValue = (defaultValue * (1 + percentage / 100)).toFixed(2);
    setInputValue(newCalculatedValue.toString());
    onChange && onChange(newCalculatedValue);
  }, [sliderValue, min, max, defaultValue, onChange]);

  const handleSliderChange = (event) => {
    const value = parseFloat(event.target.value);
    setSliderValue(value);
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
    const percentageValue = ((numericValue / defaultValue) - 1) * 100;
    const sliderPosition = min + ((percentageValue + 100) / 200) * (max - min);
    setSliderValue(sliderPosition);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleInputValidation();
    }
  };

  const handleSliderDoubleClick = () => {
    setSliderValue(initialSliderValue);
    setInputValue(defaultValue.toString());
    onChange && onChange(defaultValue.toString());
  };

  const percentage = ((sliderValue - min) / (max - min) * 200 - 100).toFixed(2);

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
