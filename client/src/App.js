import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

// Color pallete
// https://colorhunt.co/palette/ffe6e6ff2626bd1616000000

function App() {

  const [blur, setBlur] = useState(false);

  return (
    <div className="App" name="top">
      { blur && <div className="blurBackground"/>}
      <Nav setBlur={setBlur}/>
      <main>
        <About/>
        <Skills/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
