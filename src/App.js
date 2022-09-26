import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
  }
function Counter(){
  const [count, setCount] = useState(0)
  const decrsese = ()=>{
    const counter = count - 1
    setCount(counter)
  }
  return(
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={decrsese}>Decrese</button>
    </div>
  )
}


export default App;
