import './App.css';
import Nav from './components/Nav';
import About from './components/About';
// Color pallete
// https://colorhunt.co/palette/ffe6e6ff2626bd1616000000

function App() {
  return (
    <div className="App">
      <Nav/>
      <main className="d-flex flex-column align-items-center">
        <About/>
        <hr />
        <h1>Check</h1>
      </main>
    </div>
  );
}

export default App;
