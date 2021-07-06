import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import Another from './another';

function App() {

  const [count,setCount]  = useState(0);

  const decrement = ()=>{
    setCount(prevCount => prevCount-1);
  };
  const increment = ()=>{
    setCount(prevCount => prevCount+1);
  };

  return (
    <div className="App">

      <header className="App-header bg">
        <div className="flex items-center">
          <span>{count}</span>
          <Another></Another>
          <button className="bg-gray-100 h-auto text-gray-700  px-4 py-1 rounded shadow-md ml-2" onClick={decrement}>-</button>
          <button className="bg-gray-100 text-gray-700  px-4 py-1 rounded shadow-md ml-2" onClick={increment}>+</button>

        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p className="">
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
