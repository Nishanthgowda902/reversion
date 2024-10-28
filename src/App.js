import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="App">
      <h1>Theme Change</h1>
      <label>Theme:</label>
      <select onChange={handleThemeChange}>
        <option>Select Theme</option>
        <option value="nishanth">Nishanth Gowda</option>
        <option value="naveen">Naveen</option>
      </select>

      {theme === 'nishanth' && (
       <p className=" nishanth-theme">
          hi Nishanth Gowda
        </p>
      )}

      
    </div>
  );
}

export default App;
