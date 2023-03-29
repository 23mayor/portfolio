import photo from './photo.png';
import './App.css';

function App() {
  return (
    <div className="Main">
      <header className="Main-sidebar">
        <img src={photo} className="Main-photo" alt="myPhoto" />
        <h3>Artem Pchelyakov</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
