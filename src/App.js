import React from 'react';
import KeyboardTester from './components/KeyboardTester';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Keyboard Tester</h1>
      </header>
      <main>
        <KeyboardTester />
      </main>
      <footer>
        <p>Press any key to test it. The key will highlight when pressed.</p>
      </footer>
    </div>
  );
}

export default App;

