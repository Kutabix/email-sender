import React from 'react';
import './App.css';
import background from './images/bg.jpg';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <img src={background} alt="background" />
      <Form />
    </div>
  );
}

export default App;
