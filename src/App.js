import logo from './d20-blank.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Role Dice. Battle Evil.
        </p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fight Monsters!
        </a>
      </header>
    </div>
  );
}

export default App;
