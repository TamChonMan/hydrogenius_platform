import React from 'react';
import Header from './components/Header';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
};

export default App;
