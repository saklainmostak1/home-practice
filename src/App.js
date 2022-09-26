import logo from './logo.svg';
import './App.css';
const singer = 
  {name: 'nayan', profession: 'singer'}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='hello'>Welcome</h1>
        <div className='music'>
          <p>Name: {singer.name}</p>
            <p><small>Profession: {singer.profession}</small></p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
