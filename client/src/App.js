import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

// Color pallete
// https://colorhunt.co/palette/ffe6e6ff2626bd1616000000

function App() {

  const [blur, setBlur] = useState(false);

  return (
    <div className="App">
      { blur && <div className={"blurBackground"} style={{ opacity: '0.85', background: 'hsl(0, calc(var(--saturation-factor, 1) * 0%), 0%)'}}/>}
      <Nav setBlur={setBlur}/>
      <main className="d-flex flex-column align-items-center">
        <About/>
        <hr />
        <h1>Check</h1>
      </main>
    </div>
  );
}

export default App;
