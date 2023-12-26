import logo from './logo.svg';
import './App.css';

function App() {

  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => {console.log(users)})

  // fetch('https://swapi.py4e.com/api/people/2/')
  //   .then(response => response.json())
  //   .then(users => {console.log(users)})

  // fetch('http://numbersapi.com/42/math')
  //   .then(response => response.json())
  //   .then(users => {console.log(users)})

  // fetch('https://api.chucknorris.io/jokes/random')
  //   .then(response => response.json())
  //   .then(users => {console.log(users)})

  // fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash')
  //   .then(response => response.json())
  //   .then(users => {console.log(users)})

  // fetch('http://api.open-notify.org/iss-now.json')
  //   .then(response => response.json())
  //   .then(users => {console.log(users)})

  fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash')
    .then(response => response.json())
    .then(users => {console.log(users)})

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
