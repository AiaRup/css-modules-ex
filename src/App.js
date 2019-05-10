import React from 'react';
import './App.css';
import BtnBase from './components/BtnBase';
import BtnPrimary from './components/BtnPrimary';
import BtnSecondary from './components/BtnSecondary';
import BtnOutline from './components/BtnOutline';

function App() {
  return (
    <div className="App">
      <BtnBase />
      <BtnPrimary />
      <BtnSecondary />
      <BtnOutline />
    </div>
  );
}

export default App;
