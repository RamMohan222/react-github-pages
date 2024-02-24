import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';
import { Title } from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://ram222mohan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Me
        </a>
        <Card><Title>Simple React App Deploy With GitHub Pages</Title></Card>
      </header>
    </div>
  );
}

export default App;
