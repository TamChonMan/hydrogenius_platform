import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ({ name, min, max, step, defaultValue, onChange }) => {
  const initialSliderValue = (max + min) / 2;
  const [sliderValue, setSliderValue] = useState(initialSliderValue);
  const [calculatedValue, setCalculatedValue] = useState(defaultValue);

  useEffect(() => {
    // 初始化計算
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

  return (
    <div className="slider-container">
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
    </div>
  );
};

export default Slider;
