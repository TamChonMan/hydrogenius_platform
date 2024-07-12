import React, { useState, useEffect } from 'react';
import './Slider.css';
import SubSlider from './subSlider/SubSlider';
import defaultValues from './defaultValues.js';

const DecompSlider = ({ name, min, max, step, onChange }) => {
  const DecompValues = defaultValues.decommissioning;
  const capacity = defaultValues.Capacity.NumberOfTurbine.value * defaultValues.Capacity.TurbineCapacity.value;
  const hydrogenPipeDistance = defaultValues.distant.HydrogenPipe.value;
  const cableDistance = defaultValues.distant.Cable.value;

  const [values, setValues] = useState(Object.keys(DecompValues).reduce((acc, key) => {
    acc[key] = DecompValues[key].value;
    return acc;
  }, {}));

  const calculateCapitalValue = (vals) => {
    let totalValue = 0;
    for (const key in vals) {
      if (key === 'HydrogenPipe') {
        totalValue += (vals[key] * hydrogenPipeDistance) / capacity;
      } else if (key === 'Cable') {
        totalValue += (vals[key] * cableDistance) / capacity;
      } else {
        totalValue += vals[key];
      }
    }
    return totalValue.toFixed(1);
  };

  const initialCapitalValue = calculateCapitalValue(values);

  const [sliderValue, setSliderValue] = useState((max + min) / 2);
  const [calculatedValue, setCalculatedValue] = useState(initialCapitalValue);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const percentage = ((sliderValue - min) / (max - min) * 200 - 100).toFixed(1);
    const newCalculatedValue = (initialCapitalValue * (1 + percentage / 100)).toFixed(1);
    setCalculatedValue(newCalculatedValue);
    onChange && onChange(parseFloat(newCalculatedValue));
  }, [sliderValue, min, max, initialCapitalValue, onChange]);

  const handleSliderChange = (event) => {
    const value = parseFloat(event.target.value);
    setSliderValue(value);
  };

  const handleSliderDoubleClick = () => {
    setSliderValue((max + min) / 2);
  };

  const handleValueChange = (key, value) => {
    setValues(prevValues => {
      const newValues = {
        ...prevValues,
        [key]: parseFloat(value)
      };
      const updatedCalculatedValue = calculateCapitalValue(newValues);
      setCalculatedValue(updatedCalculatedValue);
      return newValues;
    });
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const percentage = ((sliderValue - min) / (max - min) * 200 - 100).toFixed(1);

  return (
    <div className={`slider-container-installation ${isDropdownVisible ? 'dropdown-active' : ''}`}>
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
          onDoubleClick={handleSliderDoubleClick}
        />
        <div className="slider-value">{calculatedValue}</div>
        <button className="dropdown-button" onClick={toggleDropdown}>
          {isDropdownVisible ? '▲' : '▼'}
        </button>
      </div>
      {isDropdownVisible && (
        <div className="dropdown-wrapper">
          <div className={`dropdown-container ${isDropdownVisible ? 'black-text' : 'white-text'}`}>
            {Object.keys(DecompValues).map(key => (
              <SubSlider
                key={key}
                name={key}
                min={0}
                max={100}
                step={1}
                defaultValue={DecompValues[key].value}
                value={values[key]}
                onChange={(value) => handleValueChange(key, value)}
                unit={DecompValues[key].unit}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DecompSlider;
