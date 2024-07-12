import React, { useState } from 'react';
import './RightContent.css';
import Result from './Result/Result';
import Parameter from './Parameter/Parameter';

const RightContent = () => {
  const [capitalValue, setCapitalValue] = useState(0); // 初始 Capital 值
  const handleCapitalChange = (value) => {
    setCapitalValue(parseFloat(value));
  };
  
  const [InstallationlValue, setInstallationValue] = useState(0); // 初始 Installation 值
  const handleInstallationChange = (value) => {
    setInstallationValue(parseFloat(value));
  };

  const [OMValue, setOMValue] = useState(0); // 初始 OM 值
  const handleOMChange = (value) => {
    setOMValue(parseFloat(value));
  };

  const [decompValue, setdecompValue] = useState(0); // 初始 OM 值
  const handledecompChange = (value) => {
    setdecompValue(parseFloat(value));
  };

  const resultValue = (capitalValue+InstallationlValue+OMValue+decompValue).toFixed(2); // Model build here

  return (
    <div className="right-content">
      <div className="result-container">
        <Result value={resultValue} />
      </div>
      <div className="parameter-container">
        <Parameter 
          onCapitalChange={handleCapitalChange} 
          onInstallationChange={handleInstallationChange} 
          onOMChange={handleOMChange}
          ondecompChange={handledecompChange}
        />
      </div>
    </div>
  );
};

export default RightContent;
