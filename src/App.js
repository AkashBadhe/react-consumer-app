import { Button } from 'rollup-react';
import './App.css';

function App() {
  // Add this in your component file
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Consumer App</h1>
        <Button label="Test button">Test Button</Button>
      </header>
    </div>
  );
}

export default App;
